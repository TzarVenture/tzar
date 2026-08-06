/* eslint-disable react/no-unescaped-entities */
"use client";
import testimonialFour from "@/app/data/testimonialFour";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonial3 from "./SingleTestimonial3";

const TinySlider3 = dynamic(() => import("@/app/componants/TinySlider/TinySlider3"), {
  ssr: false,
});

const settings = {
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 2,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    768: {
      items: 3,
      gutter: 30,
    },
    1200: {
      items: 6,
      gutter: 30,
    },
    363: {
      items: 2,
      gutter:10,
    },
  },
};

const { bg, tagline, title, testimonials } = testimonialFour;

const TestimonialFour = () => {
  const listRef = useRef(null);

  return (
    <section className="testimonial-FourWD">
      <div
        className="testimonial-three__map"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Our  Programming Language</span>
          <h2 className="section-title__title">Front End Development</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="testimonial-three__carousel">
              <TinySlider3 options={settings} listRef={listRef}>
                {testimonials.map((testimonial) => (
                  <SingleTestimonial3
                    key={testimonial.id}
                    testimonial={testimonial}
                    listRef={listRef}
                  />
                ))}
              </TinySlider3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialFour;
