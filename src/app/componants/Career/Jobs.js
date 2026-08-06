import jobs from "@/app/data/jobs";
import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import lady1 from "@/assets/images/resources/jobs/1-2.png"
import lady2 from "@/assets/images/resources/jobs/2-1.png"
import Link from "next/link";
const { bg, images, badge, tagline, jtitle, text1, text2 } = jobs;



const Jobs = () => {

  return (
    <section className="job__page">
      <Container className="CardBoxJobContainer">
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="job__right section-title">

          <h6 className="jtext-lefth6">{tagline}</h6>
          <h1 className="jtext-left">{jtitle}</h1>
          {/* <Title title={jtitle} tagline={tagline} className="jtext-left" /> */}
          <p className="job___right-text-1">{text1}</p>
          <h4 className="job__right-text-2">{text2}</h4>
          {/* <Link href="/about">
                <a className="thm-btn Pay_Per_Click__btn">Discover More</a>
              </Link> */}
        </div>
        <Row>
          <Col xl={6}>

            <div className="hiringCard1">

              <Image src={lady1.src} alt="" />
              <h1>Business Developer</h1>
              <p>With an experience of 2-4 years with Digital Marketing Agency and an aptitude to work on target basis.</p>
              <Link className="thm-btn job__btn" href="/contact">Apply Now</Link>
            </div>
          </Col>
          <Col xl={6}>
            <div className="hiringCard2">
              <Image src={lady2.src} alt="" />
              <h1>Creative Designer</h1>
              <p>Creative mind with 0-2 years of experience, able to deliver imaginative banners for brands in different industries</p>
              <Link className="thm-btn job__btn1"  href="/contact">Apply Now</Link>
              
            </div>
          </Col>
        </Row>
      </Container>




    </section>
  );
};

export default Jobs;
