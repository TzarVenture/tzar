'use client';
import faqPage from "@/app/data/faqPagedata";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "../faqs/Faq";

const { bg, faqs, bottomText } = faqPage;

const FaqPage = () => {
  return (
    <section className="faq-page">
      {/* <div
        className="faq-page-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div> */}
      <Container>
        <div className="faq-page__top">
          <Row>
            {faqs.map((singleFaqs, i) => (
              <Col xl={6} lg={6} key={i}>
                <div className="faq-page__single">
                  <Faq faqs={singleFaqs} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          <Col xl={12}>
            <div className="faq-page__bottom">
              <p className="faq-page__bottom-text">
                {bottomText} <Link href="/about">Find Your Solution</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqPage;
