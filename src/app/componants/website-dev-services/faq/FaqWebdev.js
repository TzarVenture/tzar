'use client';
import faqPage from "@/app/data/faqdevdata";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "../faq/Faq";

const { bg, faqs, bottomText } = faqPage;

const FaqWebdev = () => {
  return (
    <section className="faq-webdev">
      <Container> 
      <div className="faq-web">
        <h1 className="section-title__title">Frequently Asked Questions</h1>
        <span className="section-title__tagline">Wondering about our Shopify development services? Explore our FAQ for detailed insights into our processes, pricing, and support. We're here to assist you at every stage.</span>
        <br />
       
          <div className="faq-page__top">
            <Row>
              {faqs.map((singleFaqs, i) => (
                <Col xl={12} lg={12} key={i}>
                  <div className="faq-page__single">
                    <Faq faqs={singleFaqs} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqWebdev;
