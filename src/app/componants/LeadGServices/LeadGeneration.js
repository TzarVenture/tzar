/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

const LeadGenHero = () => {
  const heroStyle = {
    background: "#ffffff",
    color: "#000",
    padding: "80px 20px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const textStyle = {
    flex: "1 1 500px",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "20px",
  };

  const subTextStyle = {
    fontSize: "1.1rem",
    marginBottom: "25px",
    color: "#000",
    maxWidth: "500px",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  };

  const imgContainerStyle = {
    flex: "1 1 450px",
    textAlign: "center",
  };

  const heroImgStyle = {
    width: "100%",
    maxWidth: "900px",
    height: "300px",
  };

  const trustBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "40px",
  };

  const trustLogoStyle = {
    height: "40px",
    filter: "brightness(0) invert(1)",
    opacity: "0.8",
  };

  return (
    <section style={heroStyle}>
      <div style={containerStyle}>
        {/* Left Content */}
        <div style={textStyle}>
          <h1 style={titleStyle}>
            Grow Your Business with <br /> Proven Marketing Strategies
          </h1>
          <p style={subTextStyle}>
           Unlock the power of creative design to elevate your brand. Our team specializes in crafting logos, marketing creatives, social media graphics, and branding solutions that not only look stunning but also drive results. Ready to make your brand unforgettable?
          </p>

          <div style={buttonGroupStyle}>
            <Link href="#Contactform">
              <Button
                style={{
                  backgroundColor: "#0D2C6B",
                  color: "#fff",
                  fontWeight: "600",
                  borderRadius: "25px",
                  padding: "10px 22px",
                  border: "none",
                }}
              >
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div style={imgContainerStyle}>
          <img
            src="https://cdn.prod.website-files.com/5d0a61f2903f45be8e0ba3b7/6792f37649bf08b81ad56f34_cover.png" // Replace with your image/illustration
            alt="Agency Marketing"
            style={heroImgStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadGenHero;
