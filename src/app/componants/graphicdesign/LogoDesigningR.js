'use client';
import LogoDesigning from "@/app/data/logodesigning";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9,
  title, text1
} = LogoDesigning;

const LogoDesigningR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsContainer = {
    display: "grid",
    gap: "20px",
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

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #1D4224",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const imageWrapper = {
    width: "100%",
    aspectRatio: "4 / 3", // Maintains ratio across devices
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
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
    fontSize: "1rem",
    margin: 0,
  };

  const buttonStyle = {
    backgroundColor: "#003108",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  const cardData = [
    { img: img1, title: "Billboard Design" },
    { img: img2, title: "Stationery Design" },
    { img: img3, title: "Signage Design" },
    { img: img4, title: "Letterhead Design" },
    { img: img5, title: "Label Design" },
    { img: img6, title: "Business Card Design" },
    { img: img7, title: "Car Wrap Design" },
    { img: img8, title: "Logo Design" },
    { img: img9, title: "Trade Show Booth Design" },
  ];

  return (
    <section className="LogoDesigningR-page" style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
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
          {cardData.map((card, index) => (
            <li key={index}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={imageWrapper}>
                  <Image src={card.img.src} alt={card.title} style={imageStyle} />
                </div>
                <h4 style={cardTitle}>{card.title}</h4>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="#Contactform" style={buttonStyle}>
            Enquiry Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogoDesigningR;
