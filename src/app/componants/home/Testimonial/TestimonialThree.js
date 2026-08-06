/* eslint-disable react/no-unescaped-entities */
"use client";
import testimonialThree from "@/app/data/testimonialThree";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import SingleTestimonial1 from "./SingleTestimonial1";

const { bg, tagline, title, testimonials } = testimonialThree;

const TestimonialThree = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive visible items
  let visible = 7;
  if (windowWidth <= 576) visible = 2;
  else if (windowWidth <= 768) visible = 3;
  else if (windowWidth <= 992) visible = 4;

  // Responsive title
  let titleFontSize = "3rem";
  let titleLineHeight = 1.2;
  if (windowWidth <= 576) {
    titleFontSize = "1.6rem";
    titleLineHeight = 1.4;
  } else if (windowWidth <= 768) {
    titleFontSize = "2.2rem";
    titleLineHeight = 1.3;
  } else if (windowWidth <= 992) {
    titleFontSize = "2.6rem";
    titleLineHeight = 1.25;
  }
  const mid = Math.ceil(testimonials.length / 2);
const firstRow = testimonials.slice(0, mid);
const secondRow = testimonials.slice(mid);


  return (
    <section
      className="testimonial-three"
      style={{ position: "relative", padding: "60px 0", background: "#fff" }}
    >
      {/* Background */}
      <div
        className="testimonial-three__map"
        style={{
          backgroundImage: `url(${bg.src})`,
          position: "absolute",
          inset: 0,
          opacity: 0.05,
        }}
      />

      <Container>
        {/* Section Title */}
        <div
          className="section-title"
          style={{
            maxWidth: "900px",
            margin: "0 auto 40px auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              fontSize: "1.2rem",
              color: "#1D4224"
            }}
          >
            {tagline || "We Don't Sell Products"}
          </span>
          <h2
            style={{
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
              fontWeight: 700,
              margin: 0,
              color: "#1D4224"
            }}
          >
            {title || "WE MAKE ICONIC BRANDS"}
          </h2>
        </div>

       {/* SLIDER */}
{/* SLIDER */}
<div style={{ overflow: "hidden", width: "100%" }}>

  {/* ROW 1 – LEFT */}
  <div
    style={{
      display: "flex",
      gap: "25px",
      animation: "scroll-left 10s linear infinite",
      marginBottom: "25px",
    }}
  >
    {[...firstRow, ...firstRow].map((testimonial, index) => (
      <div
        key={`row1-${index}`}
        style={{
          minWidth: `calc(100% / ${visible})`,
          border: "1px solid #000",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1 / 1",
        }}
      >
        <SingleTestimonial1 testimonial={testimonial} />
      </div>
    ))}
  </div>

  {/* ROW 2 – RIGHT */}
  <div
    style={{
      display: "flex",
      gap: "25px",
      animation: "scroll-right 10s linear infinite",
    }}
  >
    {[...secondRow, ...secondRow].map((testimonial, index) => (
      <div
        key={`row2-${index}`}
        style={{
          minWidth: `calc(100% / ${visible})`,
          border: "1px solid #000",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1 / 1",
        }}
      >
        <SingleTestimonial1 testimonial={testimonial} />
      </div>
    ))}
  </div>

</div>


        {/* View More Button */}
        <div
          className="viewallservice-btn"
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <Link
            href="/our-client"
            className="BtnStudio GraphicDesigning__studiobtn"
            style={{ display: "inline-block" }}
          >
            View More
          </Link>
        </div>
      </Container>

      {/* Slider Animation */}
     <style jsx>{`
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`}</style>


    </section>
  );
};

export default TestimonialThree;