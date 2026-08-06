"use client";
import React from "react";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";

function PackagingDesignServ() {
  return (
    <section className="PDSContainer" style={{ padding: "60px 0", backgroundColor: "#f9f9f9" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontSize: "2rem", fontWeight: 600, color: "#1D4224" }}>
          Packaging Design Services
        </h2>

        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <BiIcons.BiAnalyse size={50} color="#1D4224" />
            <h4 className="mt-3">ANALYSIS</h4>
            <p className="px-3">
              First we analyze your competitors, customers’ expectations for the product and
              determine the aspects of product being user friendly.
            </p>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <SiIcons.SiAdobeindesign size={50} />
            <h4 className="mt-3">MATERIAL FRIENDLY DESIGN</h4>
            <p className="px-3">
              We design your packaging in such a manner that it can go with any material depending
              upon the product features.
            </p>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} lg={4} className="mb-4 text-center">
            <MdIcons.MdDesignServices size={50} />
            <h4 className="mt-3">DESIGN CREATION</h4>
            <p className="px-3">
              With all the analyzed information, best packaging design is created keeping in mind
              usability, branding, attention catching and customer friendliness.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PackagingDesignServ;
