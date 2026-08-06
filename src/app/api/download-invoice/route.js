import fs from "fs";
import path from "path";

export async function GET(req) {
  const file = req.nextUrl.searchParams.get("file"); // TZAR_Invoice_1234.pdf
  if (!file) return new Response("File not specified", { status: 400 });

  const filePath = path.join(process.cwd(), "public/invoices", file);

  if (!fs.existsSync(filePath)) return new Response("File not found", { status: 404 });

  const fileStream = fs.createReadStream(filePath);

  return new Response(fileStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file}"`,
    },
  });
}
