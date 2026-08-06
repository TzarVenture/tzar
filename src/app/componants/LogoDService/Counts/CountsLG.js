import counterOneLG from "@/app/data/counterOneLG";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisibilityCountUp from "./VisibilityCountUp";

const { bg, counters } = counterOneLG;

const CountsLG = () => {
  return (
    <section className="counter-oneLG">
      <div className="counter-oneLG__inner">
        <div
          className="counter-oneLG-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="counter-oneLG__box-one"></div>
        <div className="counter-oneLG__box-two"></div>
        <Container>
          <Row>
            <Col xl={12}>
              <ul className="list-unstyled counter-oneLG__list">
                {counters.map(({ id, icon, title, subtitle, count }) => (
                  <li
                    key={id}
                    className="counter-oneLG__singlebox animated fadeInUp"
                  >
                    <div className="counter-oneLG__icon">
                      <span className={icon}></span>
                    </div>
                    <h3 className="odometer">
                      <VisibilityCountUp count={count} />
                    </h3>
                    <p className="counter-oneLG__text">{title}</p>
                    <p className="counter-oneLG__text1">{subtitle}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CountsLG;
