import servicesThree from "@/app/data/servicesThree";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleServiceNew from "./SingleServiceNew";

const { bg, tagline, title, bottomText, services } = servicesThree;

const ServicesThreeNew = () => {
  return (
    <section className="services-three">
      <div
        className="services-three-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container-fluid">
        <Title title={title} tagline={tagline} className="text-center" />
        <div className="services-three__top services-all-cards" >
            {services.map((service) => (
              <SingleServiceNew key={service.id} service={service} />
            ))}
        </div>
        <div className="services-three__bottom">
          <p className="services-three__bottom-text">
            {bottomText} <Link href="#Contactform">Find Your Solution</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesThreeNew;
