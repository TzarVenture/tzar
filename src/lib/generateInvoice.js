import PDFDocument from "pdfkit/js/pdfkit.standalone.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function generateInvoice(data) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));

    doc.on("end", async () => {
      try {
        const pdfBuffer = Buffer.concat(buffers);

        // ✅ Upload as Base64 (no streamifier needed)
        const result = await cloudinary.v2.uploader.upload(
          `data:application/pdf;base64,${pdfBuffer.toString("base64")}`,
          {
            folder: "invoices",
            resource_type: "raw",
            public_id: `TZAR_Invoice_${Date.now()}`,
          }
        );

        resolve(result.secure_url); // ✅ permanent PDF URL
      } catch (err) {
        reject(err);
      }
    });

    // ===== PDF CONTENT =====
    const pageWidth = doc.page.width;
    const startX = 50;
    const rightX = 350;

    doc.font("Times-Bold").fontSize(20).text("TZAR", startX, 40);
    doc.fontSize(11).text("TZAR Venture", startX, 70);
    doc.text("DIGITAL MARKETING AGENCY", startX, 90);

    const invoiceNo = `2025${Date.now().toString().slice(-4)}`;
    const invoiceDate = new Date().toLocaleDateString("en-GB");

    doc.text(`Invoice No: ${invoiceNo}`, startX, 140);
    doc.text(`Date Issued: ${invoiceDate}`, startX, 160);

    let issuedY = 140;
    doc.font("Times-Bold").text("Issued to:", rightX, issuedY);
    issuedY += 25;

    doc.font("Times-Roman").text(data.customerName || "-", rightX, issuedY);
    issuedY += 18;

    if (data.company) { doc.text(data.company, rightX, issuedY); issuedY += 18; }
    if (data.address) { doc.text(data.address, rightX, issuedY, { width: 200 }); issuedY += 40; }
    if (data.gstNumber) { doc.text(`GST: ${data.gstNumber}`, rightX, issuedY); }

    const baseAmount = Number(data.baseAmount || data.amount || 0);
    const cgst = Math.round(baseAmount * 0.09);
    const sgst = Math.round(baseAmount * 0.09);
    const grandTotal = baseAmount + cgst + sgst;

    let tableTop = 260;
    const rowHeight = 35;
    const tableWidth = pageWidth - 100;

    doc.rect(startX, tableTop, tableWidth, rowHeight).stroke();
    doc.font("Times-Bold").text("Description", startX + 10, tableTop + 10);
    doc.text("Amount", pageWidth - 130, tableTop + 10);

    tableTop += rowHeight;

    const description = data.services?.join(", ") || "Service Payment";

    doc.rect(startX, tableTop, tableWidth, rowHeight * 2).stroke();
    doc.font("Times-Roman")
      .text(description, startX + 10, tableTop + 10, { width: 350 })
      .text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, tableTop + 10);

    tableTop += rowHeight * 2;

    let totalY = tableTop + 30;

    doc.font("Times-Bold").text("SUBTOTAL", pageWidth - 220, totalY);
    doc.text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

    totalY += 20;
    doc.text("CGST 9%", pageWidth - 220, totalY);
    doc.text(`Rs ${cgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

    totalY += 20;
    doc.text("SGST 9%", pageWidth - 220, totalY);
    doc.text(`Rs ${sgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

    totalY += 25;
    doc.fontSize(12).text("GRAND TOTAL", pageWidth - 220, totalY);
    doc.text(`Rs ${grandTotal.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

    doc.fontSize(10).text(
      `IN WORDS: Rupees ${numberToWords(grandTotal)} Only`,
      startX,
      totalY + 40
    );

    doc.fontSize(18).text("Thank You !", startX, totalY + 100, {
      align: "right",
      width: tableWidth,
    });

    doc.end();
  });
}

function numberToWords(num) {
  const a = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
    "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const b = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
  if(num===0) return "Zero";
  if(num<20) return a[num];
  if(num<100) return b[Math.floor(num/10)] + " " + a[num%10];
  if(num<1000) return a[Math.floor(num/100)] + " Hundred " + numberToWords(num%100);
  if(num<100000) return numberToWords(Math.floor(num/1000)) + " Thousand " + numberToWords(num%1000);
  return num.toString();
}







// import fs from "fs";
// import path from "path";
// import PDFDocument from "pdfkit/js/pdfkit.standalone.js";

// export function generateInvoice(data) {
//   const invoiceDir = path.join(process.cwd(), "public/invoices");

//   if (!fs.existsSync(invoiceDir)) {
//     fs.mkdirSync(invoiceDir, { recursive: true });
//   }

//   const fileName = `invoice_${Date.now()}.pdf`;
//   const filePath = path.join(invoiceDir, fileName);

//   const doc = new PDFDocument({ size: "A4", margin: 50 });
//   doc.pipe(fs.createWriteStream(filePath));

//   const pageWidth = doc.page.width;
//   const startX = 50;
//   const rightX = 350;

//   /* ================= HEADER ================= */

//   doc.font("Times-Bold").fontSize(20).text("TZAR", startX, 40);
//   doc.fontSize(11).text("TZAR Venture", startX, 70);
//   doc.text("DIGITAL MARKETING AGENCY", startX, 90);

//   const invoiceNo = `2025${Date.now().toString().slice(-4)}`;
//   const invoiceDate = new Date().toLocaleDateString("en-GB");

//   doc.fontSize(11).text(`Invoice No: ${invoiceNo}`, startX, 140);
//   doc.text(`Date Issued: ${invoiceDate}`, startX, 160);

//   /* ================= ISSUED TO ================= */

//   let issuedY = 140;
//   doc.font("Times-Bold").text("Issued to:", rightX, issuedY);
//   issuedY += 25;

//   doc.font("Times-Roman").text(data.customerName || "-", rightX, issuedY);
//   issuedY += 18;

//   if (data.company) {
//     doc.text(data.company, rightX, issuedY);
//     issuedY += 18;
//   }

//   if (data.address) {
//     doc.text(data.address, rightX, issuedY, { width: 200 });
//     issuedY += 40;
//   }

//   if (data.gstNumber) {
//     doc.text(`GST: ${data.gstNumber}`, rightX, issuedY);
//   }

//   /* ================= AMOUNTS ================= */

//   const baseAmount = Number(data.baseAmount || data.amount || 0);
//   const cgst = Math.round(baseAmount * 0.09);
//   const sgst = Math.round(baseAmount * 0.09);
//   const grandTotal = baseAmount + cgst + sgst;

//   /* ================= TABLE ================= */

//   let tableTop = 260;
//   const rowHeight = 35;
//   const tableWidth = pageWidth - 100;

//   // Header
//   doc.rect(startX, tableTop, tableWidth, rowHeight).stroke();
//   doc.font("Times-Bold").text("Description", startX + 10, tableTop + 10);
//   doc.text("Amount", pageWidth - 130, tableTop + 10);

//   tableTop += rowHeight;

//   const description = data.services?.join(", ") || "Service Payment";

//   doc.rect(startX, tableTop, tableWidth, rowHeight * 2).stroke();
//   doc.font("Times-Roman")
//     .text(description, startX + 10, tableTop + 10, { width: 350 })
//     .text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, tableTop + 10);

//   tableTop += rowHeight * 2;

//   /* ================= TOTAL SECTION ================= */

//   let totalY = tableTop + 30;

//   doc.font("Times-Bold").text("SUBTOTAL", pageWidth - 220, totalY);
//   doc.text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

//   totalY += 20;
//   doc.text("CGST 9%", pageWidth - 220, totalY);
//   doc.text(`Rs ${cgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

//   totalY += 20;
//   doc.text("SGST 9%", pageWidth - 220, totalY);
//   doc.text(`Rs ${sgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

//   totalY += 25;
//   doc.fontSize(12).text("GRAND TOTAL", pageWidth - 220, totalY);
//   doc.text(`Rs ${grandTotal.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

//   /* ================= AMOUNT IN WORDS ================= */

//   doc.fontSize(10).text(
//     `IN WORDS: Rupees ${numberToWords(grandTotal)} Only`,
//     startX,
//     totalY + 40
//   );

//   /* ================= PAYMENT INFO ================= */

//   let payY = totalY + 80;
//   doc.font("Times-Bold").text("Payment Info:", startX, payY);

//   payY += 18;
//   doc.font("Times-Roman").text("Account Details :", startX, payY);

//   payY += 15;
//   doc.text("Name : Tzar Digital Agency", startX, payY);

//   payY += 15;
//   doc.text("Bank Name : Kotak Mahindra Bank", startX, payY);

//   payY += 15;
//   doc.text("Account Number : 2545306876", startX, payY);

//   payY += 15;
//   doc.text("IFSC Code : KBK0001363", startX, payY);

//   payY += 15;
//   doc.text("GST : 27ASYPR9821NZF", startX, payY);

//   /* ================= FOOTER ================= */

//   doc.fontSize(18).text("Thank You !", startX, payY + 50, {
//     align: "right",
//     width: tableWidth,
//   });

//   doc.end();

//   return `/invoices/${fileName}`;
// }

// /* ================= NUMBER TO WORDS ================= */

// function numberToWords(num) {
//   const a = [
//     "", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
//     "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
//     "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
//   ];

//   const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//   if (num === 0) return "Zero";

//   if (num < 20) return a[num];

//   if (num < 100) return b[Math.floor(num / 10)] + " " + a[num % 10];

//   if (num < 1000)
//     return a[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);

//   if (num < 100000)
//     return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);

//   return num.toString();
// }
