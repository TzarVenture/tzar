import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="cta-one__inner" >
              <div className="cta-one__box-1"></div>
              <div className="cta-one__box-2"></div>
              <div className="cta-one__left">
                <div className="cta-one__icon">
                  <span className="icon-consulting" style={{color: "#D4AF37"}}></span>
                </div>
                <div className="cta-one__title-box">
                  <h2 className="cta-one__title" style={{color: "#D4AF37"}}>
                    We deliver the best <br /> customer experience
                  </h2>
                </div>
              </div>
              <div className="cta-one__right">
                <Link href="/contact" className="thm-btn cta-one__btn" style={{background: "#D4AF37", color: "#fff"}}>
                  let’s get started
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTAOne;
 