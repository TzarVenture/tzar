import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleService = ({ service = {} }) => {
  const { title, icon, link, text } = service;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="services-three__single">
        <div className="services-three_icon">
          <span className={icon}></span>
        </div>
        <h3 className="services-three__title">
          <Link href={link}>
              <TextSplit text={title} />
          </Link>
        </h3>
        <p className="services-three__text">{text}</p>
        <div className="services-three__btn-box">
          <Link href={link} className="services-three__btn">
            Read More
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
