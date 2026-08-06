import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import BlogDetailsLeft from "./BlogDetailsLeft";

const BlogDetailsPage = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <BlogDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
