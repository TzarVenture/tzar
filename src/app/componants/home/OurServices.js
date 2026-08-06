import servicesOne from "@/app/data/servicesOne";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleService from "./SingleService";

const { bg, tagline, title, text, services } = servicesOne;

const OurServices = () => {
  return (
    <section id="ServicesOne" className="services-one">
      <div
        className="services-one-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="services-one__top">
          <Row>
            <Col xl={7} lg={6}>
              <div className="services-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">
                    {title.split("\n").map((t, i) => (
                      <Fragment key={i}>
                        {t} <br />
                      </Fragment>
                    ))}
                  </h2>
                </div>
              </div>
            </Col>
            <Col xl={5} lg={6}>
              <div className="services-one__top-right">
                {/* <p className="services-one__top-text">{text}</p> */}
              </div>
            </Col>
          </Row>
        </div>
        <div className="services-one__bottom">
          <Row>
            {services.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
            {/* <Col xl={4} lg={4} className="animated fadeInUp">
              <div className="services-one__view-all">
                <div className="services-one__view-all-title-box">
                  <h3 className="services-one__view-all-title">
                    <Link href="/our_services">
                      
                        View our <br /> all services
                    
                    </Link>
                  </h3>
                </div>
                <div className="services-one__view-all-arrow">
                  <Link href="/our_services">
                   
                      <span className="icon-arrow-right"></span>
                    
                  </Link>
                </div>
              </div>
            </Col> */}
          </Row>
          <div className="viewallservice-btn">
            <Link href="/services" className="BtnStudio GraphicDesigning__studiobtn" >
              View All Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
