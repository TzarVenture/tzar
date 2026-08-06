"use client";
import React from "react";
import payperclick from "@/app/data/payperclick";
import ppcmgmt1 from "@/assets/images/resources/PPcMgmt/1.png";
import ppcmgmt2 from "@/assets/images/resources/PPcMgmt/2.png";
import ppcmgmt3 from "@/assets/images/resources/PPcMgmt/3.png";
import ppcmgmt4 from "@/assets/images/resources/PPcMgmt/4.png";
import ppcmgmt5 from "@/assets/images/resources/PPcMgmt/5.png";
import ppcmgmt6 from "@/assets/images/resources/PPcMgmt/6.png";
import { useWindowSize } from "@react-hook/window-size/throttled";

const {
  HeadTitle,
  title1,
  subtitle1,
  title2,
  subtitle2,
  title3,
  subtitle3,
  title4,
  subtitle4,
  title5,
  subtitle5,
  title6,
  subtitle6,
} = payperclick;

function PayperClickMgmt() {
  const [width] = useWindowSize({ fps: 60 });

  const boxStyle = {
    flex: "1 1 250px",
    minWidth: "250px",
    textAlign: "center",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const titleStyle = {
    fontSize: width < 768 ? "16px" : "20px",
    margin: "10px 0",
  };

  const subtitleStyle = {
    fontSize: width < 768 ? "13px" : "15px",
    color: "#555",
  };

  return (
    <section style={{ padding: "40px 15px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: width < 768 ? "26px" : "38px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {HeadTitle}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {[ 
            { img: ppcmgmt1, title: title1, subtitle: subtitle1 },
            { img: ppcmgmt2, title: title2, subtitle: subtitle2 },
            { img: ppcmgmt3, title: title3, subtitle: subtitle3 },
            { img: ppcmgmt4, title: title4, subtitle: subtitle4 },
            { img: ppcmgmt5, title: title5, subtitle: subtitle5 },
            { img: ppcmgmt6, title: title6, subtitle: subtitle6 },
          ].map((item, idx) => (
            <div key={idx} style={boxStyle}>
              <img
                src={item.img.src}
                alt=""
                style={{ maxWidth: "80px", marginBottom: "10px" }}
              />
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={subtitleStyle}>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PayperClickMgmt;
