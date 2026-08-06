'use client';
import client from "@/app/data/client";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import Link from "next/link";
import { Button } from 'react-bootstrap';

const { title, tagline, socials, teams } = client;

const Client = ({ className = "" }) => {
  return (
    <section className={`Client-one ${className}`}>
      <Container>
        {!className && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Row>
          {teams
            .slice(0, className ? undefined : 40)
            .map(({ id, name, title, image , describe }) => (
              <Col key={id} xl={3} lg={6} md={6} className="animated fadeInUp">
                <div className="Client-one__single">
                  <div className="Client-one__img">
                    <Image
                      src={require(`@/assets/images/client/${image}`).default.src}
                      alt=""
                    />
                    <div className="Client-one__details">
                      <p className="Client-one__title">{title}</p>
                      <h4 className="Client-one__name">{name}</h4>
                      <p className="Client-one__title">{describe}</p>
                      
                    </div>
                    <div className="Client-one__social">
                      {socials.map((social, index) => (
                        <a key={index} href="#">
                          <i className={social}></i>
                        </a>
                      ))}
                                          
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Client;
