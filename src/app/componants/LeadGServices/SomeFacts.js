import somefacts from "@/app/data/somefacts";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisibilityCountUp from "../LogoDService/Counts/VisibilityCountUp";


const { bg, headtitle,  counters } = somefacts;

const SomeFacts  = () => {
  return (
    <section className="SomeFactsContainer">
      <div className="SomeFacts__inner">
        
        {/* <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div> */}
        {/* <div className="counter-one__box-one"></div>
        <div className="counter-one__box-two"></div> */}
        <Container>
        <h1>{headtitle}</h1>
          <Row>
            <Col xl={12}>
              <ul className="list-unstyledFacts SomeFacts__list">
                {counters.map(({ id, icon, title, count }) => (
                  <li
                    key={id}
                    className="SomeFacts__single animated fadeInUp"
                  >
                    <div className="SomeFacts__icon">
                      <span className={icon}></span>
                    </div>
                    <h3 className="odometer">
                      {/* <VisibilityCountUp count={count} /> */}
                      <VisibilityCountUp count={count}/>
                    </h3>
                    <p className="SomeFacts__text">{title}</p>
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

export default SomeFacts;
