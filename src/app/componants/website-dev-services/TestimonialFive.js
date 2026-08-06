/* eslint-disable react/no-unescaped-entities */
"use client";
import testimonialFive from "@/app/data/testimonialFive";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonial4 from "./SingleTestimonial4";

const TinySlider4 = dynamic(() => import("@/app/componants/TinySlider/TinySlider4"), {
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
  },
};

const { bg, tagline, title, testimonials } = testimonialFive;

const TestimonialFive = () => {
  const listRef = useRef(null);

  return (
    <section className="testimonial-threeWD">
        <style>{`
    /* Shift the testimonial section down */
    .testimonial-threeWD {
      margin-top: 80px; /* Adjust this value as needed */
    }

    /* Optional: responsive adjustments */
    @media (max-width: 1200px) {
      .testimonial-threeWD {
        margin-top: 60px;
      }
    }

    @media (max-width: 768px) {
      .testimonial-threeWD {
        margin-top: 40px;
      }
    }
  `}</style>
      <div
        className="testimonial-three__map"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
        <span className="section-title__tagline">Our  Programming Language</span>
          <h2 className="section-title__title">Back End Development</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="testimonial-three__carousel">
              <TinySlider4 options={settings} listRef={listRef}>
                {testimonials.map((testimonial) => (
                  <SingleTestimonial4
                    key={testimonial.id}
                    testimonial={testimonial}
                    listRef={listRef}
                  />
                ))}
              </TinySlider4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialFive;
