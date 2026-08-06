'use client';
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import graphicdesign from "@/app/data/graphicdesign";
import Link from "next/link";

const {
  bg, img1, img2, img3, img4, img5, img6, img7, img8, title, text1
} = graphicdesign;

const GraphicDesigR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSrc = (img) => (typeof img === "string" ? img : img?.src);

  const cardData = [
    { img: img1, title: "Graphic Design" },
    { img: img2, title: "PowerPoint Design" },
    { img: img3, title: "Vector Design" },
    { img: img4, title: "3D Design" },
    { img: img5, title: "Photoshop Design" },
    { img: img6, title: "Podcast Design" },
    { img: img7, title: "Infographic Design" },
    { img: img8, title: "Mascot Design" },
  ];

  // ✅ Grid Layout
  const cardsContainer = {
    display: "grid",
    gap: "15px",
    listStyle: "none",
    padding: 0,
    margin: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)"
        : screenWidth >= 992
        ? "repeat(3, 1fr)"
        : "repeat(2, 1fr)",
  };

  // ✅ Card Style
  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #1D4224",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

 const imageWrapper = {
  width: "100%",
  aspectRatio: "4 / 3",  // maintain consistent aspect ratio
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
  overflow: "hidden",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  width: "auto",
  objectFit: "contain",
  borderRadius: "6px",
};


  const cardTitle = {
    color: "#1D4224",
    fontWeight: 600,
    fontSize: "0.9rem",
    margin: 0,
  };

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#003108",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "inline-block",
  };

  return (
    <section className="GraphicDesigR-page" style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
      <div
        style={{
          backgroundColor: "#fff",
          // backgroundImage: `url(${getSrc(bg)})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1
              style={{
                fontSize: screenWidth < 480 ? "1.6rem" : "2.2rem",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#1D4224"
              }}
            >
              {title}
            </h1>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: "1rem",
                color: "#555",
              }}
            >
              {text1}
            </p>
          </div>

          {/* Cards */}
          <ul style={cardsContainer}>
            {cardData.map(({ img, title }, index) => (
              <li key={index}>
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div style={imageWrapper}>
                    <Image src={getSrc(img)} alt={title} style={imageStyle} />
                  </div>
                  <h4 style={cardTitle}>{title}</h4>
                </div>
              </li>
            ))}
          </ul>

          {/* Enquiry CTA */}
          <div style={buttonWrapper}>
            <Link href="#Contactform" style={buttonStyle}>
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigR;
