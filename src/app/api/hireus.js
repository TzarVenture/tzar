import { writeFile } from "fs/promises";
import path from "path";
import Hireus from "@/models/hireus";
import connectDB from "@/lib/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const form = await req.formData();
    const fullName = form.get("fullName");
    const email = form.get("email");
    const phone = form.get("phone");
    const internshipType = form.get("internshipType");
    const file = form.get("resume"); // actual file

    // ====== Save PDF in /public/uploads/ ======
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = `/uploads/${Date.now()}-${file.name}`;
    const fullPath = path.join(process.cwd(), "public", filePath);

    await writeFile(fullPath, buffer);
    console.log("File saved:", fullPath);

    // ==== Save to MongoDB ====
    const doc = await Hireus.create({
      fullName,
      email,
      phone,
      internshipType,
      resume: filePath, // saved URL
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
