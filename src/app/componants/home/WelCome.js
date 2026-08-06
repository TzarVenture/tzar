import welcomeOne from "@/app/data/welcomeOne";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  shape,
  image,
  experience,
  tagline,
  title,
  text,
  bottomTitle,
  points,
  person,
  personName,
  bottomRightTitle,
} = welcomeOne;

const WelcomeOne = () => {
  return (
    <section className="welcome-one">
      {/* <div className="welcome-one-shape animated slideInLeft">
        <Image src={shape.src} alt="" />
      </div> */}
      <Container>
        <Row>
          <Col xl={6} className="animated slideInLeft">
            <div className="welcome-one__left">
              <div className="welcome-one__img-box">
                <div className="welcome-one__img">
                  <Image src={image.src} alt="" />
                </div>
                <div className="welcome-one__experience">
                  <div className="welcome-one__experience-icon">
                    <span className="icon-conversation"></span>
                  </div>
                  <div className="welcome-one__experience-content">
                    <h3 className="welcome-one__experience-title">
                      <span>{experience}</span>+ Years of
                      <br /> Working Experience
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="welcome-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="welcome-one__right-text">{text}</p>
              <div className="welcome-one__bottom">
                <Row>
                  <Col xl={6} lg={6} md={6}>
                    <div className="welcome-one__bottom-left">
                      <h4 className="welcome-one__bottom-title">
                        {bottomTitle.split("\n").map((t, i) => (
                          <Fragment key={i}>
                            {t} <br />
                          </Fragment>
                        ))}
                      </h4>
                      <ul className="list-unstyled welcome-one__points">
                        {points.map((point, i) => (
                          <li key={i}>
                            <div className="icon">
                              <span className="icon-tick"></span>
                            </div>
                            <div className="text">
                              <p>{point}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="welcome-one__person">
                        <div className="welcome-one__person-img">
                          <Image src={person.src} alt="" />
                        </div>
                        <div className="welcome-one__person-sign">
                          <h3>{personName}</h3>
                        </div>
                      </div> */}
                    </div>
                  </Col>
                  {/* <Col xl={6} lg={6} md={6}>
                    <div className="welcome-one__bottom-right">
                      <div className="welcome-one__bottom-right-content">
                        <div className="welcome-one__bottom-right-icon">
                          <span className="icon-help"></span>
                        </div>
                        <h4 className="welcome-one__bottom-right-title">
                          {bottomRightTitle}
                        </h4>
                        <Link className="thm-btn welcome-one__btn" href="/about-us">read more
                        </Link>
                      </div>
                    </div>
                  </Col> */}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeOne;
