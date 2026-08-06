'use client';
import artillustration from "@/app/data/artillustration";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  bg,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  title,
  text1,
} = artillustration;

const ArtIllustrationR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive Grid Layout
  const cardsContainer = {
    display: "grid",
    gap: "15px",
    listStyle: "none",
    padding: 0,
    margin: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)" // desktop
        : screenWidth >= 992
        ? "repeat(3, 1fr)" // laptop
        : "repeat(2, 1fr)", // mobile
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #1D4224",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "0.3s ease",
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

  const buttonStyle = {
    backgroundColor: "#003108",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  // ✅ Normalize src (for string or imported object)
  const getSrc = (img) => (typeof img === "string" ? img : img?.src);

  const cards = [
    { img: img1, title: "Illustration Design" },
    { img: img2, title: "Character Design" },
    { img: img3, title: "Card Design" },
    { img: img4, title: "Art Design" },
    { img: img5, title: "CD Cover Design" },
    { img: img6, title: "Tattoo Design" },
    { img: img7, title: "Invitation Design" },
    { img: img8, title: "eBook Cover Design" },
    { img: img9, title: "Greeting Card Design" },
    { img: img10, title: "Book Cover Design" },
  ];

  return (
    <section
      className="ArtIllustration-page"
      style={{ padding: "40px 20px", backgroundColor: "#fff" }}
    >
      <div
        className="counter-one-pattern"
        style={{
          backgroundImage: `url(${getSrc(bg)})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      ></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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

        {/* ✅ Cards */}
        <ul style={cardsContainer}>
          {cards.map(({ img, title }, idx) => (
            <li key={idx}>
              <div style={cardStyle}>
                <div style={imageWrapper}>
                  <Image src={getSrc(img)} alt={title} style={imageStyle} />
                </div>
                <h4 style={cardTitle}>{title}</h4>
              </div>
            </li>
          ))}
        </ul>

        {/* ✅ Enquiry Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="#Contactform" style={buttonStyle}>
            Enquiry Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtIllustrationR;
