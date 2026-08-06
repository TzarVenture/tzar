'use client';
import whyChoose from "@/app/data/whyChoose";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
const {
  image,
  tagline,
  title,
  rightText,
  contentImage,
  points,
  progressTitle,
  progressPercent,
} = whyChoose;

const WhyChoose = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className="why-choose-one">
      <Container>
        <Row>
          <Col xl={6} className="animated slideInLeft">
            <div className="why-choose-one__left">
              <div className="why-choose-one__img">
                <video className="video" autoPlay loop muted src="https://ik.imagekit.io/xhgygdewi6/Graph.mp4?updatedAt=1710761631558"></video>
              </div>
             <div className="AniBox">
                <div className="why-choose-one-box-1"></div>
                <div className="why-choose-one-box-2"></div>
                <div className="why-choose-one-box-3"></div>
              </div>  
            </div>
          </Col>
          <Col xl={6}>
            <div className="why-choose-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="why-choose-one__right-text">{rightText}</p>
              <div className="why-choose-one__content">
                <div className="why-choose-one__content-img">
                  <Image src={contentImage.src} alt="" />
                </div>
                <div className="why-choose-one__content-list">
                  <ul className="list-unstyled why-choose-one__points">
                    {points.map((point, i) => (
                      <li key={i}>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <div className="text">
                          <p>{point}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="why-choose-one__progress">
                <div className="why-choose-one__progress-single">
                  <h4 className="why-choose-one__progress-title">
                    {progressTitle}
                  </h4>
                  <ReactVisibilitySensor
                    offset={{ top: 10 }}
                    delayedCall={true}
                    onChange={onVisibilityChange}
                  >
                    <div className="bar">
                      <div
                        style={{
                          width: countStart ? `${progressPercent}%` : 0,
                        }}
                        className="bar-inner count-bar"
                      >
                        <div
                          style={{ opacity: countStart ? 1 : 0 }}
                          className="count-text"
                        >
                          {progressPercent}%
                        </div>
                      </div>
                    </div>
                  </ReactVisibilitySensor>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
