import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleServiceNew = ({ service = {} }) => {
  const { title, icon, link, text } = service;

  return (
    <div className="animated fadeInUp ">
      <div className="services-three__single1 services-cardsnew" style={{ height: "400px" }}>
        <div className="services-three_icon">
          <span className={icon}></span>
        </div>
        <h3 className="services-three__title" style={{marginTop: "0px", fontSize: "19px"}}>
          <Link href={link}>
              <TextSplit text={title} />
          </Link>
        </h3>
        <p className="services-three__text1">{text}</p>
        <div className="services-three__btn-box1">
          <Link href={link} className="services-three__btn1" style={{color: "#1D4224"}}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceNew;
