'use client';
import aboutPage from "@/app/data/aboutPage";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "@/app/componants/Reuseable/Title";

const { tagline, title, text1, text2 } = aboutPage;

const AboutPage = () => {
  return (
    <section
      className="about-page"
      style={{
        padding: "60px 0",
        backgroundColor: "#ffffff"
      }}
    >
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT FULL IMAGE */}
          <Col xl={6}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
              }}
            >
              <Image
                src={require("@/assets/images/resources/about-page-img-2.png").default.src}
                alt="About Image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  filter: "grayscale(100%)"
                }}
              />
            </div>
          </Col>

          {/* RIGHT TEXT */}
          <Col xl={6}>
            <div
              className="about-page__right"
              style={{
                paddingLeft: "40px",
                backgroundColor: "#ffffff",
              }}
            >
              <Title title={title} tagline={tagline} className="text-left" />

              <p style={{ marginTop: "10px", lineHeight: "1.7" }}>
                {text1}
              </p>

              <h4
                style={{
                  marginTop: "25px",
                  fontWeight: 600,
                  lineHeight: "1.5",
                  color: "#003108",
                }}
              >
                {text2}
              </h4>

              <Link
                href="/about"
                className="thm-btn abut-page__btn"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  padding: "12px 28px",
                  backgroundColor: "#003108",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Discover More
              </Link>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
