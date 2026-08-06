import counterOne from "@/app/data/counterOne";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisibilityCountUp from "./VisibilityCountUp/VisibilityCountUp";

const { bg, counters } = counterOne;

const CounterOne = () => {
  return (
    <section className="counter-one">
      <div className="counter-one__inner">
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="counter-one__box-one"></div>
        <div className="counter-one__box-two"></div>
        <Container>
          <Row>
            <Col xl={12}>
              <ul className="list-unstyled counter-one__list">
                {counters.map(({ id, icon, title, count }) => (
                  <li
                    key={id}
                    className="counter-one__single animated fadeInUp"
                  >
                    <div className="counter-one__icon">
                      <span className={icon}></span>
                    </div>
                    <h3 className="odometer">
                      <VisibilityCountUp count={count} />
                    </h3>
                    <p className="counter-one__text">{title}</p>
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

export default CounterOne;
