import mongoose from "mongoose";

export async function GET() {
  const uri = process.env.MONGODB_URL;

  try {
    if (!uri) {
      return Response.json({ message: "MONGODB_URI missing" }, { status: 500 });
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(uri);
    }

    return Response.json({ message: "Database Connected Successfully" });
  } catch (error) {
    return Response.json(
      { message: "Database Connection Failed", error: error.message },
      { status: 500 }
    );
  }
}
