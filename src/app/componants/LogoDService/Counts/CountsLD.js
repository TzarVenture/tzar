import counterOneLD from "@/data/counterOneLD";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const { bg, counters } = counterOneLD;

const CountsLD = () => {
  return (
    <section className="counter-oneLD">
      <div className="counter-oneLD__inner">
        <div
          className="counter-oneLD-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="counter-oneLD__box-one"></div>
        <div className="counter-oneLD__box-two"></div>
        <Container>
          <Row>
            <Col xl={12}>
              <ul className="list-unstyled counter-oneLD__list">
                {counters.map(({ id, icon, title, count }) => (
                  <li
                    key={id}
                    className="counter-oneLD__single animated fadeInUp"
                  >
                    <div className="counter-oneLD__icon">
                      <span className={icon}></span>
                    </div>
                    <h3 className="odometer">
                      <VisibilityCountUp count={count} />
                    </h3>
                    <p className="counter-oneLD__text">{title}</p>
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

export default CountsLD;
