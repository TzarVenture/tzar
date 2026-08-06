export const runtime = "nodejs";

import crypto from "crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { generateInvoice } from "@/lib/generateInvoice";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerName,
      company,
      customerEmail,
      gstNumber,
      address,
      baseAmount,
      gstAmount,
      amount,
      services,
    } = body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, error: "Invalid signature" },
        { status: 400 }
      );
    }

    const invoiceUrl = await generateInvoice({
      customerName,
      company,
      customerEmail,
      gstNumber,
      address,
      baseAmount,
      gstAmount,
      amount,
      services,
    });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Tzar Venture" <${process.env.EMAIL_USER}>`,
        to: `${customerEmail}, ${process.env.ADMIN_EMAIL}`,
        subject: "Payment Successful - Invoice",
        html: `
          <h2>Hi ${customerName},</h2>
          <p>Your payment of ₹${amount} was successful.</p>
          <p>Payment ID: ${razorpay_payment_id}</p>
          <p>
            <a href="${invoiceUrl}" target="_blank"
              style="padding:12px 20px;background:#000;color:#fff;
              text-decoration:none;border-radius:6px;">
              Download Invoice (PDF)
            </a>
          </p>
          <p>Regards,<br/>Tzar Venture</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      invoiceUrl,
    });

  } catch (error) {
    console.error("Verify Payment Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}





// export const runtime = "nodejs";

// import crypto from "crypto";
// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";
// import { generateInvoice } from "@/lib/generateInvoice";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//     customerName,
//     company,
//     customerEmail,
//     gstNumber,
//     address,
//     baseAmount,
//     gstAmount,
//     amount,
//     services,
//     } = body;

//     // Safety check: Razorpay secret must exist
//     if (!process.env.RAZORPAY_KEY_SECRET) {
//       console.error("RAZORPAY_KEY_SECRET is missing in .env.local!");
//       return NextResponse.json(
//         { success: false, error: "Razorpay secret missing" },
//         { status: 500 }
//       );
//     }

//     // Verify payment signature
//     const generatedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest("hex");

//     if (generatedSignature !== razorpay_signature) {
//       return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
//     }

//     // ✅ Generate PDF invoice
//     const invoiceUrl = generateInvoice({
//   customerName,
//     company,
//     customerEmail,
//     gstNumber,
//     address,
//     baseAmount,
//     gstAmount,
//     amount,
//     services,
// });


//     // ✅ Send invoice via email (customer + admin)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // App password if using Gmail 2FA
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: `${customerEmail}, ${process.env.ADMIN_EMAIL}`,
//       subject: "Payment Successful - Your Invoice",
//       html: `
//         <p>Hi ${customerName},</p>
//         <p>Thank you for your payment of ₹${amount}.</p>
//         <p><b>Payment ID:</b> ${razorpay_payment_id}</p>
//         <p>
//           <a href="${process.env.NEXT_PUBLIC_SITE_URL}${invoiceUrl}" target="_blank">
//             Download Invoice
//           </a>
//         </p>
//         <p>Regards,<br>Tzar Venture</p>
//       `,
//       attachments: [
//         {
//           path: `public${invoiceUrl}`, // Attach the PDF invoice
//         },
//       ],
//     });

//     // ✅ Respond to frontend with invoice URL
//     return NextResponse.json({ success: true, invoiceUrl });

//   } catch (error) {
//     console.error("Verify Payment Error:", error);
//     return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
//   }
// }
