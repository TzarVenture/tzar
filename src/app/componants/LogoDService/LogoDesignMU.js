"use client";

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logodesignmu from "@/app/data/logodesignmu";

const { MUImages } = logodesignmu;

function LogoDesignMU({ className = "" }) {
  const sectionStyle = {
    padding: "30px 0", // reduced from 50px to 30px
    marginTop: "-20px", // optional: negative margin to pull section upward
  };

  const textCenterStyle = {
    textAlign: "center",
    padding: "20px 0",
  };

  const titleStyle = {
    fontWeight: "700",
    fontSize: "2.3rem",
    color: "#1D4224",
  };

  const subtitleStyle = {
    color: "#1D4224",
    marginBottom: "8px",
  };

  const imgWrapperStyle = {
    overflow: "hidden",
    borderRadius: "18px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "100%",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  };

  return (
    <section className={`MUContainer ${className}`} style={sectionStyle}>
      <Container>
        <div style={textCenterStyle}>
          <h6 style={subtitleStyle}>About Logo Design MockUp</h6>
          <h1 style={titleStyle}>Logo Design MockUp Services</h1>
        </div>

        <Row className="justify-content-center g-4">
          {MUImages.map(({ id, image }) => (
            <Col key={id} xs={12} sm={12} md={6}>
              <div
                style={imgWrapperStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.15)";
                }}
              >
                <Image
                  src={require(`@/assets/images/Mockup/${image}`).default.src}
                  alt={`Mockup ${id}`}
                  style={imgStyle}
                  loading="lazy"
                  fluid
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LogoDesignMU;
