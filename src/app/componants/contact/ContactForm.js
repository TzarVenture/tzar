"use client";

import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import './ContactForm.css'
const ContactForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const message = `
Service: ${formData.get("services")}
City: ${formData.get("city")}
Country: ${formData.get("country")}
Agreement: ${formData.get("checkbox")}
`.trim();

    const payload = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message,
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // EXACT styling as in your screenshot:
  const inputStyle = {
    height: "40px",
    width: "100%",
    borderRadius: "20px",
    paddingLeft: "15px",
    marginBottom: "13px",
    border: "none",
    background: "white",
    color: "black",
    fontSize: "13px",
    outline: "none",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  };

  const buttonStyle = {
    width: "120px",
    height: "38px",
    borderRadius: "18px",
    background: "#1D4224",
    color: "white",
    fontWeight: "600",
    border: "none",
    marginTop: "5px",
    cursor: "pointer",
  };

  return (
   <div
  style={{
    background: "#D4AF37",
    borderRadius: "15px",
    padding: "15px",
    width: "100%",
    maxWidth: "390px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.15)",
    margin: "0 auto",
  }}
>

      <h5
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "black",
          marginBottom: "18px",
        }}
      >
        From Concept to Capture: We Do It All
      </h5>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="John Doe"
          required
          style={inputStyle}
          className="input-form-1"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Add phone no."
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="john@gmail.com"
          required
          style={inputStyle}
        />

        <select name="services" required style={selectStyle} className="select-home-options">
          <option value="" style={{color: "black"}}>Services</option>
          <option>Websites Design & Development</option>
          <option>Social Media (SMO | SMM)</option>
          <option>Performance Marketing</option>
          <option>Influencer Marketing</option>
          <option>Brand Marketing</option>
          <option>Search Engine Optimization (SEO)</option>
          <option>Product Shoot</option>
          <option>2D&3D Animation</option>
          <option>Logo Design</option>
          <option>Product Packaging</option>
        </select>

        <Row>
          <Col xl={6}>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              required
              style={inputStyle}
            />
          </Col>

          <Col xl={6}>
            <input
              type="text"
              name="country"
              placeholder="Your Country"
              required
              style={inputStyle}
            />
          </Col>
        </Row>

        {/* Checkbox area */}
        <div style={{ marginTop: "10px", marginBottom: "15px" }}>
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              value="I agree to T&C and Privacy Policy"
              required
              style={{
                marginTop: "3px",
                width: "16px",
                height: "16px",
              }}
            />

            <p
              style={{
                fontSize: "12px",
                margin: 0,
                color: "#333",
                lineHeight: "16px",
              }}
            >
              By Proceeding, I agree to{" "}
              <Link href="/TermsConditions" style={{ textDecoration: "underline" }}>
                T&C
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" style={{ textDecoration: "underline" }}>
                Privacy Policy
              </Link>
              . Yes, I would like to receive updates via WhatsApp.
            </p>
          </label>
        </div>

        <button type="submit" disabled={isSubmitting} style={buttonStyle}>
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </form>

      {status === "success" && (
        <div
          style={{
            background: "#c7ffd6",
            padding: "10px",
            color: "#0c6f34",
            borderRadius: "10px",
            marginTop: "15px",
          }}
        >
          Form submitted successfully!
        </div>
      )}

      {status === "error" && (
        <div
          style={{
            background: "#ffd3d3",
            padding: "10px",
            color: "#9b0000",
            borderRadius: "10px",
            marginTop: "15px",
          }}
        >
          There was an error submitting the form.
        </div>
      )}
    </div>
  );
};

export default ContactForm;