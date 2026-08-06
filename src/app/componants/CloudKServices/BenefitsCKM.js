import React from 'react';
import { Container } from "react-bootstrap";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

const { bg } = benefitsckm;

function BenefitsCKM({ className = "" }) {
  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#fff",
    position: "relative",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
  };

  const patternStyle = {
    backgroundImage: `url(${bg.src})`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.05,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  };

  const boxStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "left",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const iconStyle = {
    fontSize: "30px",
    marginBottom: "10px",
    color: "#003366",
  };

  const headingStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: 600,
  };

  const paragraphStyle = {
    fontSize: "14px",
    color: "#333",
    lineHeight: 1.4,
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Benefits</h1>
      <div style={patternStyle}></div>
      <Container>
        <div style={gridStyle}>
          <div style={boxStyle}>
            <HiIcons.HiChartBar style={iconStyle} />
            <h1 style={headingStyle}>50% of sales</h1>
            <p style={paragraphStyle}>We help in increasing revenue by up to 50%</p>
          </div>
          <div style={boxStyle}>
            <FaIcons.FaRegNewspaper style={iconStyle} />
            <h1 style={headingStyle}>Payback in 2-3 months</h1>
            <p style={paragraphStyle}>You get your marketing budget paid back within few months of digital advertising.</p>
          </div>
          <div style={boxStyle}>
            <AiIcons.AiOutlineMail style={iconStyle} />
            <h1 style={headingStyle}>30% Traffic Increase</h1>
            <p style={paragraphStyle}>With your social media techniques your engagement goes up by 30%</p>
          </div>
          <div style={boxStyle}>
            <HiIcons.HiChartBar style={iconStyle} />
            <h1 style={headingStyle}>60% of repeat sales</h1>
            <p style={paragraphStyle}>The highest rate for repeat sales through personalized offers and its series of reminders</p>
          </div>
          <div style={boxStyle}>
            <HiIcons.HiUserGroup style={iconStyle} />
            <h1 style={headingStyle}>Customers stay with you for a long time</h1>
            <p style={paragraphStyle}>You are 2-3 times longer communicating with your clients, respectively purchases also 2-3 times more</p>
          </div>
          <div style={boxStyle}>
            <FaIcons.FaMoneyBillAlt style={iconStyle} />
            <h1 style={headingStyle}>At 3-5 times more money from the customer</h1>
            <p style={paragraphStyle}>A customer brings in an average of 3-5 times more money by staying loyal customer forever</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BenefitsCKM;
