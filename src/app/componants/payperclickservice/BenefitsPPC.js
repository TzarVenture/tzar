"use client";
import React from "react";
import benefitsckm from "@/app/data/benefitsckm";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { useWindowSize } from "@react-hook/window-size/throttled";

// const { bg } = benefitsckm;

function BenefitsPPC() {
  const [width] = useWindowSize({ fps: 60 });

  const boxStyle = {
    flex: "1 1 300px",
    minWidth: "280px",
    textAlign: "center",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const headingStyle = {
    fontSize: width < 768 ? "18px" : "22px",
    lineHeight: "1.4",
  };

  return (
    <section
      style={{
        padding: "40px 15px",
        backgroundColor: "#ffffff",
        // backgroundImage: `url(${bg.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          fontSize: width < 768 ? "26px" : "38px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Benefits
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div style={boxStyle}>
          <ImIcons.ImTree style={{ fontSize: "40px", marginBottom: "10px" }} />
          <h1 style={headingStyle}>Successful advertising campaign</h1>
        </div>

        <div style={boxStyle}>
          <GiIcons.GiTrophyCup
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h1 style={headingStyle}>
            Improvement in CTR with Google Adwords
          </h1>
        </div>

        <div style={boxStyle}>
          <FaIcons.FaUser style={{ fontSize: "40px", marginBottom: "10px" }} />
          <h1 style={headingStyle}>
            Reduce the cost of the customer by at least 21%
          </h1>
        </div>
      </div>
    </section>
  );
}

export default BenefitsPPC;
