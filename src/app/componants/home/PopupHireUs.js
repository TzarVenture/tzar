"use client";
import React, { useState } from "react";

export default function ApplicationForm() {
  const [fileName, setFileName] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    internshipType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      formType: "hireus", // tells Apps Script to write to Internship sheet
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      internshipType: form.internshipType,
      resume: fileName,
    };

    try {
      // Send to MongoDB + Google Sheets API Route
      const res = await fetch("/api/hireus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Submitted:", result);

      alert("Your application has been submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, width: "100%" }}>
      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "650px",
            background: "#fff",
            borderRadius: "12px",
            padding: "30px 40px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#333" }}>
            Application Form
          </h2>

          <p style={{ color: "#666", marginTop: "4px", fontSize: "14px" }}>
            Please fill out all required fields. We’ll review your application
            within 5 business days.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Full Name */}
            <label
              style={{
                marginBottom: "6px",
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
              }}
            >
              Full Name *
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              style={{
                padding: "10px 14px",
                border: "1px solid #ccd2d8",
                background: "#f7f9fc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            />

            {/* Email */}
            <label
              style={{
                marginBottom: "6px",
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
              }}
            >
              Email Address *
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
              style={{
                padding: "10px 14px",
                border: "1px solid #ccd2d8",
                background: "#f7f9fc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            />

            {/* Phone */}
            <label
              style={{
                marginBottom: "6px",
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
              }}
            >
              Phone Number *
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="+1 (555) 123-4567"
              style={{
                padding: "10px 14px",
                border: "1px solid #ccd2d8",
                background: "#f7f9fc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            />

            {/* Internship Type */}
            <label
              style={{
                marginBottom: "6px",
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
              }}
            >
              Internship Type *
            </label>
            <select
              name="internshipType"
              value={form.internshipType}
              onChange={handleChange}
              style={{
                padding: "10px 14px",
                border: "1px solid #ccd2d8",
                background: "#f7f9fc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            >
              <option>Select internship type</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Marketing</option>
              <option>Content Writing</option>
            </select>

            {/* File Upload */}
            <label
              style={{
                marginBottom: "6px",
                marginTop: "14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#444",
              }}
            >
              Resume/CV * (PDF, DOC, or DOCX - Max 5MB)
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginTop: "6px",
              }}
            >
              <label
                style={{
                  padding: "8px 16px",
                  background: "#2d8cf0",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Choose File
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                  style={{ display: "none" }}
                />
              </label>

              <span style={{ fontSize: "14px", color: "#666" }}>
                {fileName || "No file chosen"}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "12px 0",
                background: "#003366",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
