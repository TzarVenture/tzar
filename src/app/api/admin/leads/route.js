import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { verifySync } from "otplib";

function verifyAuth(inputCode) {
  if (!inputCode) return false;
  const cleanCode = inputCode.toString().trim().replace(/\s+/g, "");

  // 1. Check passcode match
  const validPasscode = process.env.ADMIN_DASHBOARD_PASSCODE || "tzar1234";
  if (cleanCode === validPasscode) return true;

  // 2. Check 6-digit TOTP match
  const secret = process.env.ADMIN_2FA_SECRET || "UA5JSGAY6WAVVENUC2GJRCOA23J2P3LZ";
  try {
    const res = verifySync({ token: cleanCode, secret });
    if (res && res.valid) return true;
  } catch (e) {
    // ignore format errors
  }

  return false;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { passcode } = body;

    if (!verifyAuth(passcode)) {
      return NextResponse.json(
        { success: false, error: "Invalid passcode or Authenticator 2FA code" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("contact_db");

    // Fetch collections
    const contactsRaw = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const hireusRaw = await db
      .collection("hireus")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const webdevsRaw = await db
      .collection("webdevs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const contacts = contactsRaw.map((item) => ({
      id: item._id.toString(),
      type: "Contact Form",
      name: item.name || "N/A",
      email: item.email || "N/A",
      phone: item.phone || "N/A",
      details: item.message || "",
      createdAt: item.createdAt || item._id.getTimestamp(),
      rawDoc: item,
    }));

    const hireus = hireusRaw.map((item) => {
      const nameParts = [item.firstname || item.fullName, item.lastname]
        .filter(Boolean)
        .join(" ");
      return {
        id: item._id.toString(),
        type: "Hire Us / Enquiry",
        name: nameParts || "N/A",
        email: item.email || "N/A",
        phone: item.phone || "N/A",
        industry: item.industry || item.internshipType || "N/A",
        budget: item.budget || "N/A",
        website: item.websiteurl || "N/A",
        resume: item.resume || null,
        details: item.message || `Industry: ${item.industry || "N/A"} | Budget: ${item.budget || "N/A"} | Website: ${item.websiteurl || "N/A"}`,
        createdAt: item.createdAt || item._id.getTimestamp(),
        rawDoc: item,
      };
    });

    const webdevs = webdevsRaw.map((item) => ({
      id: item._id.toString(),
      type: "WebDev Form",
      name: item.name || item.fullName || "N/A",
      email: item.email || "N/A",
      phone: item.phone || "N/A",
      details: item.message || "",
      createdAt: item.createdAt || item._id.getTimestamp(),
      rawDoc: item,
    }));

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        hireus,
        webdevs,
      },
    });
  } catch (err) {
    console.error("Error in /api/admin/leads:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id, type, passcode } = await req.json();

    if (!verifyAuth(passcode)) {
      return NextResponse.json(
        { success: false, error: "Invalid passcode or Authenticator 2FA code" },
        { status: 401 }
      );
    }

    if (!id || !type) {
      return NextResponse.json(
        { success: false, error: "Missing lead ID or type" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("contact_db");

    let collectionName = "contacts";
    if (type === "Hire Us / Enquiry") {
      collectionName = "hireus";
    } else if (type === "WebDev Form") {
      collectionName = "webdevs";
    }

    const result = await db.collection(collectionName).deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Lead record not found in database" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting lead:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
