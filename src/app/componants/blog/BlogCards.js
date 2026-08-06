// components/BlogCards.js
"use client";
import Link from "next/link";
import React from "react";
import { Col, Image, Row , Container } from "react-bootstrap";
import blogdata from "@/app/data/blogdata";
import "./blog-card.css";
const { image } = blogdata;

const BlogCards = () => {

  return (
    <>
      <section className="blog-page">
        <Container>
          <Row style={{ display: "flex", gap: "20px" }}>
            {blogdata.map((blog) => (
              <Link href={`/blog/${blog.slug}`} className="blog-card" key={blog.id}>
                <div className="blog-card-img">
                    <Image className="blog-image"  src={require(`@/assets/images/blog/${blog.image}`).default.src} alt="" />
                </div>
                <div className="blog-card-content">
                  <p style={{ color: "gray", textTransform: "uppercase", fontSize: "12px", margin: "0" }}>Content</p>
                  <p className="blog-title">{blog.title}</p>
                  {/* <p style={{ color: "gray"}}>Brand management has a new problem. Everything you have built, your positioning, your messaging, your reputation, can now be summarized…</p> */}
                  <p style={{ color: "gray"}}>{blog.description}</p>

                <div className="bottom-section" style={{display: "none"}}>
                  <div className="bottom-img-container">
                    img
                    {/* <Image className="bottom-img" src={require(`@/assets/images/blog/${blog.authorImage}`).default.src} alt="" /> */}
                  </div>
                  <div>
                    <h3 style={{ color: "black", fontSize: "18px", margin: "0" }}>John Doe</h3>
                    <p style={{ color: "gray", fontSize: "14px", margin: "0"  }}>aho dohgosd so g</p>
                  </div>
                  <div style={{ color: "gray"}}>
                    {/* Icon */}
                    June 20, 2023
                  </div>
                </div>
                </div>
              </Link>
              // BLog Card
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogCards;
