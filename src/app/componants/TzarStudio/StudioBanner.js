"use client";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { useWindowSize } from "@react-hook/window-size/throttled";
import ContactForm from "../contact/ContactForm";

function handleButtonClick() {
  const element = document.getElementById("Contactform");
  element.scrollIntoView({ behavior: "smooth" });
}

function StudioBanner() {
  const [width] = useWindowSize({ fps: 60 });

  return (
    <div className="studio-header" style={{ padding: "40px 20px" }}>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Camera / Lens */}
        <Col
          xl={4}
          md={12}
          sm={12}
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div>
            <span className="banner-text">LIGHTS</span>
            <div>
              <img
                src="/camlense.png"
                alt="Camera lens"
                width="350"
                height="350"
                style={{
                  margin: "20px auto",
                  display: "block",
                  animation: "spin 20s linear infinite",
                }}
              />
            </div>
            <span className="banner-text">IMAGINATION</span>
          </div>
        </Col>

        {/* Middle text & buttons */}
        <Col
          xl={4}
          md={12}
          sm={12}
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div>
            <span className="banner-text cameratext">CAMERA</span>
            <TypeAnimation
              sequence={["PRODUCT PHOTOGRAPHY SERVICES ", 1000, ""]}
              speed={25}
              deletionSpeed={99}
              wrapper="h3"
              repeat={Infinity}
            />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Button className="BtnStudio" href="/services">
                Our Services
              </Button>
              <Button className="BtnStudio" onClick={handleButtonClick}>
                Enquiry Now
              </Button>
            </div>
          </div>
        </Col>

        {/* Contact form */}
        <Col
          xl={4}
          md={12}
          sm={12}
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "390px",
              // padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              // background: "#fff",
              marginTop: width <= 768 ? "0" : "-20px", // no overlap on small screens
            }}
          >
            <ContactForm />
          </div>
        </Col>
      </Row>

      {/* Inline keyframes for rotation and responsive styling */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .banner-text {
          font-weight: bold;
          font-size: 50px;
          display: block;
        }

        .BtnStudio {
          min-width: 140px;
        }

        @media (max-width: 1024px) {
          .studio-header {
            padding: 20px 10px;
          }

          .banner-text {
            font-size: 20px;
          }

          img {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 820px) {
          .studio-header {
            padding: 15px 8px;
          }

          .banner-text {
            font-size: 18px;
          }

          img {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}

export default StudioBanner;
