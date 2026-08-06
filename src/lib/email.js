import nodemailer from "nodemailer";
import { generateInvoice } from "@/lib/generateInvoice";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  const data = await req.json();

  const invoicePath = await generateInvoice(data); // e.g., /invoices/TZAR_Invoice_167889.pdf
  const invoiceFileName = path.basename(invoicePath);

  const downloadLink = `${process.env.NEXT_PUBLIC_SITE_URL}${invoicePath}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const logoUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`; // put logo in public/images/logo.png

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: `${data.email}, ${process.env.ADMIN_EMAIL}`,
  subject: "Payment Invoice",
  html: `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:30px;border-radius:10px;font-family:Arial,sans-serif;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:25px;">
              <img src="${logoUrl}" alt="Tzar Venture" width="180" style="display:block;" />
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="font-size:16px;color:#333;padding-bottom:15px;">
              Hi ${data.customerName},
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="font-size:15px;color:#555;padding-bottom:25px;line-height:1.6;">
              Thank you for your payment. Your invoice has been generated successfully.
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding-bottom:30px;">
              <a href="${downloadLink}"
                 style="background:#023878;color:#ffffff;text-decoration:none;
                        padding:12px 28px;border-radius:6px;font-weight:600;
                        display:inline-block;">
                Download Invoice (PDF)
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="font-size:15px;color:#333;padding-top:20px;">
              Regards,<br/>
              <strong>Tzar Venture</strong>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `,
  attachments: [
    {
      filename: invoiceFileName,
      path: path.join(process.cwd(), "public/invoices", invoiceFileName),
    },
  ],
});


  return NextResponse.json({ success: true, invoicePath });
}
