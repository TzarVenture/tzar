import { writeFile } from "fs/promises";
import path from "path";
import Hireus from "@/models/hireus";
import connectDB from "@/lib/connectDB";
import { forwardToCrm } from "@/utils/forwardToCrm";

export async function POST(req) {
  try {
    await connectDB();

    let fullName = "";
    let email = "";
    let phone = "";
    let internshipType = "";
    let filePath = "";

    try {
      const form = await req.formData();
      fullName = form.get("fullName");
      email = form.get("email");
      phone = form.get("phone");
      internshipType = form.get("internshipType");
      const file = form.get("resume"); // actual file

      if (file && typeof file === "object" && file.name) {
        // ====== Save PDF in /public/uploads/ ======
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        filePath = `/uploads/${Date.now()}-${file.name}`;
        const fullPath = path.join(process.cwd(), "public", filePath);

        await writeFile(fullPath, buffer);
        console.log("File saved:", fullPath);
      } else if (typeof file === "string") {
        filePath = file;
      }
    } catch {
      const data = await req.json().catch(() => ({}));
      fullName = data.fullName;
      email = data.email;
      phone = data.phone;
      internshipType = data.internshipType;
      filePath = data.resume || "";
    }

    // ==== Save to MongoDB ====
    const doc = await Hireus.create({
      fullName,
      email,
      phone,
      internshipType,
      resume: filePath, // saved URL
    });

    // ==== Forward to Central CRM ====
    await forwardToCrm({
      source: "HIRE_US",
      fullName,
      email,
      phone,
      interestedServices: internshipType ? [internshipType] : [],
      requirementsMessage: `Internship/Hire: ${internshipType || "N/A"}${filePath ? ` | Resume: ${filePath}` : ""}`,
      tzarData: {
        formType: "HIRE_US",
        resumeUrl: filePath,
      },
    });

    // ==== Send to Google Sheets ====
    await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        internshipType,
        resume: filePath, // so you can open it!
      }),
    });

    return Response.json({ success: true, file: filePath, doc });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
