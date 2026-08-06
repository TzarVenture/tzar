"use client";
import blogDetails from "@/app/data/blogDetails";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import TextSplit from "../Reuseable/TextSplit";

const {
  image,
  date,
  admin,
  title,
  texts,
  tags,
  socials,
  pagination,
  comments,
} = blogDetails;

const BlogDetailsLeft = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  return (
    <div className="blog-details__left">
      <div className="blog-details__img">
        <Image src={image.src} alt="" />
        <div className="blog-details__date-box">
          <p>{date}</p>
        </div>
      </div>
      <div className="blog-details__content">
        <ul className="list-unstyled blog-details__meta">
          <li>
            <Link href="/blog-details">
                <i className="far fa-user-circle"></i> By {admin}
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <Link href="/blog-details">
                <i className="far fa-comments"></i> {comments.length} Comments
            </Link>
          </li>
        </ul>
        <h3 className="blog-details__title">{title}</h3>
        {texts.map((text, i) => (
          <p key={i} className={`blog-details__text-${i + 1}`}>
            {text}
          </p>
        ))}
      </div>
      <div className="blog-details__bottom">
        <p className="blog-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p>
        <div className="blog-details__social-list">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="blgo-details__pagenation-box">
        <ul className="list-unstyled blog-details__pagenation">
          {pagination.map((text, i) => (
            <li key={i}>
              <TextSplit text={text} />
            </li>
          ))}
        </ul>
      </div>
      <div className="comment-one">
        <h3 className="comment-one__title">{comments.length} Comments</h3>
        {comments.map(({ id, comment, name, image }) => (
          <div key={id} className="comment-one__single">
            <div className="comment-one__image">
              <Image
                src={require(`@/assets/images/blog/${image}`).default.src}
                alt=""
              />
            </div>
            <div className="comment-one__content">
              <h3>{name}</h3>
              <p>{comment}</p>
              <Link href="/blog-details" className="thm-btn comment-one__btn">
                Reply
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-form">
        <h3 className="comment-form__title">Leave a Comment</h3>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="comment-one__form contact-form-validated"
        >
          <Row>
            <Col xl={6}>
              <div className="comment-form__input-box">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your name"
                  name="name"
                />
                {errors.name && (
                  <span className="error">This field is required</span>
                )}
              </div>
            </Col>
            <Col xl={6}>
              <div className="comment-form__input-box">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email address"
                  name="email"
                />
                {errors.email && (
                  <span className="error">This field is required</span>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="comment-form__input-box">
                <textarea
                  {...register("message", { required: true })}
                  name="message"
                  placeholder="Write message"
                ></textarea>
                {errors.message && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <button type="submit" className="thm-btn comment-form__btn">
                Submit a Comment
              </button>
            </Col>
          </Row>
        </form> */}
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
