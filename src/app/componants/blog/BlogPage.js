import SingleBlog from "@/app/componants/blog/SingleBlog";
import blogPage from "@/app/data/blogPage";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";

const BlogPage = () => {
  return (
    <section className="blog-page">
      <Container>
        <Row>
          {blogPage.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </Row>
        <div className="blog-sidebar__load-more text-center">
          <Link href="/blog-details" className="thm-btn blog-sidebar__load-more-btn">
              Load more posts
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
