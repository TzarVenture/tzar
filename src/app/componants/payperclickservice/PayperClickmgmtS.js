"use client";
import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import { useWindowSize } from "@react-hook/window-size/throttled";

function PayperClickmgmtS() {
  const [width] = useWindowSize({ fps: 60 });

  const boxStyle = {
    flex: "1 1 220px",
    minWidth: "200px",
    textAlign: "center",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const iconStyle = {
    fontSize: width < 768 ? "36px" : "50px",
    marginBottom: "10px",
    color: "#023473",
  };

  const textStyle = {
    fontSize: width < 768 ? "14px" : "16px",
  };

  return (
    <section style={{ padding: "40px 15px", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div style={boxStyle}>
          <BsIcons.BsEmojiSmile style={iconStyle} />
          <p style={textStyle}>We conduct an audit of Ad campaigns and website</p>
        </div>
        <div style={boxStyle}>
          <HiIcons.HiChartSquareBar style={iconStyle} />
          <p style={textStyle}>We provide analytics reports</p>
        </div>
        <div style={boxStyle}>
          <BsIcons.BsTelephoneFill style={iconStyle} />
          <p style={textStyle}>Increase in leads and enquiry</p>
        </div>
        <div style={boxStyle}>
          <FaIcons.FaMedal style={iconStyle} />
          <p style={textStyle}>
            Reduction in the average cost of clicks and customers
          </p>
        </div>
      </div>

      <h1
        style={{
          fontSize: width < 768 ? "22px" : "32px",
          marginBottom: "20px",
        }}
      >
        We consider the work done when your desired ROI is achieved
      </h1>

      <button
        style={{
          background: "#023473",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: width < 768 ? "14px" : "16px",
          cursor: "pointer",
        }}
      >
        Start profitable advertising campaign now!
      </button>
    </section>
  );
}

export default PayperClickmgmtS;
