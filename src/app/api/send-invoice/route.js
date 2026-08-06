import nodemailer from "nodemailer";
import { generateInvoice } from "@/lib/generateInvoice";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const invoiceUrl = await generateInvoice(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Tzar Venture" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Payment Successful - Invoice",
    html: `
      <p>Hi ${data.customerName},</p>
      <p>Your payment of ₹${data.amount} was successful.</p>
      <p>
        <a href="${invoiceUrl}" target="_blank">
          Download Invoice
        </a>
      </p>
      <p>Regards,<br/>Tzar Venture</p>
    `,
  });

  return NextResponse.json({
    success: true,
    invoiceUrl,
  });
}
