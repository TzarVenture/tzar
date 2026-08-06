/* eslint-disable react/no-unescaped-entities */
'use client';
import testimonialseoclient from "@/app/data/testimonialseoclient";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import SingleTestimonial1 from "./SingleTestimonial1";

const { bg, tagline, title, testimonials } = testimonialseoclient;

const TestimonialThreeSeo = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive columns
  let columns = 7;
  if (windowWidth <= 576) columns = 2;
  else if (windowWidth <= 768) columns = 3;
  else if (windowWidth <= 992) columns = 4;
  else if (windowWidth <= 1200) columns = 5;

  return (
    <section className="testimonial-three" style={{ position: "relative", padding: "60px 0", background: "#fff" }}>
      {/* Background Map (faint) */}
      <div
        className="testimonial-three__map"
        style={{
          backgroundImage: `url(${bg?.src})`,
          position: "absolute",
          inset: 0,
          opacity: 0.05,
        }}
      ></div>

      <Container>
        <div className="section-title text-center" style={{ marginBottom: "40px" }}>
          <span className="section-title__tagline">{tagline || "We Don't Sell Products"}</span>
          <h2 className="section-title__title">{title || "WE MAKE ICONIC BRANDS"}</h2>
        </div>

        {/* Grid instead of slider */}
        <div
          className="testimonial-three__grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "20px",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                background: "#fff",
                border: "1px solid #000",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1 / 1",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <SingleTestimonial1 testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="viewallservice-btn" style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/our-client" className="BtnStudio GraphicDesigning__studiobtn">
            View More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialThreeSeo;
