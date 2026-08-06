"use client";
import React from "react";
import * as HiIcons from "react-icons/hi";

export default function Benefits() {
  const containerStyle = {
    padding: "40px 20px",
    background: "linear-gradient(135deg, #f8f9fa 25%, #ffffff 100%)",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1D4224",  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px", // ✅ pushes cards down so they don’t overlap heading
  };

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    textAlign: "left",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "#1D4224",
    flexShrink: 0,
  };

  const headingStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "6px",
  };

  const paraStyle = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>BENEFITS FOR YOUR BUSINESS</h1>

      <div style={gridStyle}>
        <div style={cardStyle}>
          <HiIcons.HiShare style={iconStyle} />
          <div>
            <h1 style={headingStyle}>Increases brand awareness</h1>
            <p style={paraStyle}>
              Company’s image or Brand creation using the multimedia capabilities of social networking
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <HiIcons.HiHeart style={iconStyle} />
          <div>
            <h1 style={headingStyle}>Increases audience loyalty</h1>
            <p style={paraStyle}>
              Formation of user confidence in the brand, product, company, achieved through interaction
              within the social network
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <HiIcons.HiChatAlt2 style={iconStyle} />
          <div>
            <h1 style={headingStyle}>Feedback</h1>
            <p style={paraStyle}>
              SMO allows you to get feedback from potential and real customers to improve the quality of your services
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <HiIcons.HiUserGroup style={iconStyle} />
          <div>
            <h1 style={headingStyle}>Base of potential customers</h1>
            <p style={paraStyle}>
              SMO allows you to build a base of potential customers for further conversion into real customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
