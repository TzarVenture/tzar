import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ServiceDetailsRight from "./ServiceDetailsRight";
import Sidebar from "./Sidebar";

const ServicesDetails = ({ service = {} }) => {
  return (
    <section className="service-details">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
          <Col xl={8} lg={7}>
            <ServiceDetailsRight service={service} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesDetails;
