"use client";

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import adsDevServices from "@/app/data/adsDevServices";

const {
  HeadTitle,
  title1, title2, title3, title4,
  title5, title6, title7, title8,
  title9, title10, title11, title12,
  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12
} = adsDevServices;

function AdsServices({ className = "" }) {
  const cards = [
    { img: a1.src, title: title1 },
    { img: a2.src, title: title2 },
    { img: a3.src, title: title3 },
    { img: a4.src, title: title4 },
    { img: a5.src, title: title5 },
    { img: a6.src, title: title6 },
    { img: a7.src, title: title7 },
    { img: a8.src, title: title8 },
    { img: a9.src, title: title9 },
    { img: a10.src, title: title10 },
    { img: a11.src, title: title11 },
    { img: a12.src, title: title12 },
  ];

  const cardStyle = {
    textAlign: "center",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    height: "100%",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  };

  return (
    <section className={`ads-page ${className}`} style={{ padding: "50px 15px", background: "#f9f9f9" }}>
      <Container>
        <h1 className="text-center mb-5" style={{ fontWeight: "700" }}>{HeadTitle}</h1>

        <Row className="justify-content-center gx-4 gy-4">
          {cards.map((card, index) => (
            <Col
              key={index}
              xs={6}   // Mobile: 2 per row
              sm={4}   // Tablet: 3 per row
              md={3}   // Desktop: 4 per row
            >
              <div
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={card.img} width="80px" height="80px" alt={card.title} style={{ marginBottom: "10px" }} />
                <h6 style={{ fontWeight: "600", fontSize: "1rem" }}>{card.title}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AdsServices;
