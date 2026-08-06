"use client";
import cloudkitchenmarketingt from "@/app/data/cloudkitchenmarketingt";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import Title from "../Reuseable/Title";
import { useWindowSize } from "@react-hook/window-size/throttled";

const {
  images,
  badge,
  text13,
  text12,
  tagline,
  title,
  text1,
  text2,
} = cloudkitchenmarketingt;

const CloudKitchenMarketing = () => {
  const [width] = useWindowSize({ fps: 60 });
  const isTablet = width <= 991;

  return (
    <section
      className="Ck-page"
      style={{
        padding: isTablet ? "40px 20px" : "80px 0",
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Chef / Illustration Image Section */}
          <Col md={12} className="text-center mb-4">
            <div className="Lead_Generation__image" style={{ maxWidth: "300px", margin: "0 auto" }}>
              <Image
                src={require(`@/assets/images/resources/${images[0]}`).default.src}
                alt="Cloud Kitchen Chef"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Col>

          {/* Text Content Section */}
          <Col md={12}>
            <div className="Ck__text-content" style={{ textAlign: "center" }}>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                About Cloud Kitchen Marketing
              </p>
              <h2
                style={{
                  fontSize: isTablet ? "22px" : "32px",
                  lineHeight: "1.3",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                GET TO KNOW CLOUD KITCHEN MARKETING
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                {text1}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                {text12}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#333",
                  marginBottom: "25px",
                }}
              >
                {text13}
              </p>

              <div>
                <Link
                  href="#Contactform"
                  className="thm-btn Ck__btn"
                  style={{
                    border: "1px solid #000",
                    padding: "10px 25px",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "500",
                    background: "transparent",
                    color: "#000",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  ENQUIRY NOW
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CloudKitchenMarketing;
