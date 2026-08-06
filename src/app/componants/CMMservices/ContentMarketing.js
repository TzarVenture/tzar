"use client";
import contentMarketingt from "@/app/data/contentMarketingt";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";

const { images, badge, tagline, title, text1, text2 } = contentMarketingt;

const ContentMarketing = () => {
  return (
    <section className="Cm-page py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Images */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="Cm__left position-relative">
              <ul className="list-unstyled Cm__images">
                {images.map((image, i) => (
                  <li key={i} className={`Cm__img-${i + 1}`}>
                    <Image
                      src={require(`@/assets/images/resources/${image}`).default.src}
                      alt={`image-${i + 1}`}
                      className="img-fluid rounded"
                    />
                  </li>
                ))}
              </ul>
              {/* Uncomment this if using badge and Tilt */}
              {/* <div className="Cm__badge position-absolute">
                <Image src={badge.src} alt="badge" />
              </div> */}
            </div>
          </Col>

          {/* Right Column: Text Content */}
          <Col lg={6}>
            <div className="Cm__right text-center text-lg-start">
              <h1 className="section-title__titleCm mb-4" style={{ color: "#1D4224" }}>
                {title}
              </h1>
              <p className="Cm__right-text-1 mb-3">{text1}</p>
              <p className="Cm__right-text-1 mb-4">{text2}</p>
              <Link style={{color: "black"}} href="#Contactform" className="thm-btn Cm__btn">
                Enquiry Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentMarketing;
