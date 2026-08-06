/* eslint-disable @next/next/no-img-element */
import footerData from "@/app/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, title, phone, phone1, phoneIcon, mailIcon, googlepartner, facebook, googlereview, socials, address, city, email, links, year, author } =
  footerData;

const SiteFooter1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div
          className="site-footer__top-shape"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
      </div>

      <div className="">
        <Container>
          <div className="site-footer__middle-inner">
            <Row>
              <Col xl={3} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">TZAR DIGITAL AGENCY</h3>
                  <p className="footer-widget__contact-text">
                    {address} <br /> {city}
                  </p>
                </div>
              </Col>
              <Col xl={4} lg={4} className="animated fadeInUp">

              </Col>
              <Col xl={5} lg={4} className="animated fadeInUp">
                <Row>
                  <Col xl={12}>
                    <div className="footer-partners">
                      <a href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8">
                        <img src={googlereview.src} alt="googlereview" width="100px" height="40px" />
                      </a>

                      <img src={googlepartner.src} alt="googlepartner" width="150px" height="55px" />
                      <a href="https://www.facebook.com/TzarAgency">
                        <img src={facebook.src} alt="facebook" width="130px" height="50px" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
       
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyrights, {year} <a href="#">{author}</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter1;
