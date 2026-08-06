import mongoose from "mongoose";

const hireusSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    internshipType: {
      type: String,
      required: true,
    },
    resume: {
      type: String, // file name or file URL
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hireus =
  mongoose.models.Hireus || mongoose.model("Hireus", hireusSchema);

export default Hireus;
