import blogOne from "@/app/data/blogOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlog from "./SingleBlog";

const { tagline, title, blogs } = blogOne;

const BlogOne = () => {
  return (
    <section className="blog-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogOne;
