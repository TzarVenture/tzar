import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const data = await req.json();

    // === 1️⃣ Save to MongoDB ===
    const client = await clientPromise;

    // USE SPECIFIC DATABASE
    const db = client.db("contact_db");

    // USE COLLECTION "contacts"
    const collection = db.collection("contacts");

    const mongoDoc = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      createdAt: new Date(),
    };

    await collection.insertOne(mongoDoc);
    console.log("Saved to MongoDB:", mongoDoc);

    // === 2️⃣ Send to Google Sheets ===
    try {
      const resSheets = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mongoDoc),
      });

      try {
        const sheetsResult = await resSheets.json();
        console.log("Sheets result:", sheetsResult);
      } catch {
        console.warn("Google Sheets did not return JSON.");
      }
    } catch (err) {
      console.error("Error sending to Google Sheets:", err);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in /api/submit-form:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
