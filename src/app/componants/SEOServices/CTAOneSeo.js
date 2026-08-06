"use client"; 
import Link from "next/link";
import React from "react";
import { Col, Container, Row  } from "react-bootstrap";
import ctaTwo from "@/app/data/ctaTwo";
import { Button } from "react-scroll";

const { icon, title } = ctaTwo;

const CTATwoSeo = () => {
  return (
    <section className="cta-Three">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="cta-Three__inner">
              <div className="cta-Three__left">
                <div className="cta-Three__icon">
                  <span className="icon-consulting"></span>
                </div>
               <div className="titleHeadCta">
                  <h1>WHAT RESULTS CAN BE EXPECTED IN YOUR PROJECT?</h1>
                  <p>We do competitor analysis and strategic analysis which increases the probability of a positive result upto 80%.</p>
               </div>
               <div className="cta-Three__right">
                <Link href="/contact" className="thm-btn cta-Three__btn">
                  let’s get started
                </Link>
              </div>
              </div>
            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTATwoSeo;

