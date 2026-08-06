import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import factfollow from "@/app/data/factfollow";
import * as CgIcon from "react-icons/cg";

const { title, tagline, Facts } = factfollow;

function FactFollow({ className = "" }) {
  // Inline styles
  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#fff",
  };

  const boxStyle = {
    backgroundColor: "#003366", // Dark blue
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    flexWrap: "wrap", // Wraps on small devices
  };

  const iconStyle = {
    fontSize: "28px",
    minWidth: "30px",
    color: "#fff",
    marginTop: "4px",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.5",
    flex: 1,
    minWidth: "250px",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    fontWeight: "500",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        {!className && (
          <div style={titleStyle}>
            <Title title={title} tagline={tagline} className="text-center" />
          </div>
        )}
        <Row>
          {Facts.slice(0, className ? undefined : 4).map(({ id, describe }) => (
            <Col key={id} xl={12} lg={12} md={12}>
              <div style={boxStyle}>
                <CgIcon.CgFileDocument style={iconStyle} />
                <p style={textStyle}>{describe}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FactFollow;
