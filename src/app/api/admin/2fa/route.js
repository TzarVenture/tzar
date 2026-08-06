import { generateURI, verifySync } from "otplib";
import QRCode from "qrcode";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const secret = process.env.ADMIN_2FA_SECRET || "UA5JSGAY6WAVVENUC2GJRCOA23J2P3LZ";
    const otpauth = generateURI({
      secret,
      issuer: "TZAR Venture Admin",
      label: "corporate@tzar.co",
    });

    const qrCodeUrl = await QRCode.toDataURL(otpauth);

    return NextResponse.json({
      success: true,
      secret,
      qrCodeUrl,
      otpauth,
    });
  } catch (err) {
    console.error("Error generating 2FA QR code:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { token } = await req.json();
    const secret = process.env.ADMIN_2FA_SECRET || "UA5JSGAY6WAVVENUC2GJRCOA23J2P3LZ";

    if (!token) {
      return NextResponse.json(
        { success: false, error: "6-digit Authenticator code is required" },
        { status: 400 }
      );
    }

    const cleanToken = token.toString().trim().replace(/\s+/g, "");

    let isValid = false;
    try {
      const res = verifySync({ token: cleanToken, secret });
      isValid = Boolean(res && res.valid);
    } catch (e) {
      console.error("TOTP verification error:", e);
    }

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired 6-digit Authenticator code" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "2FA authentication successful",
    });
  } catch (err) {
    console.error("Error verifying 2FA token:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
