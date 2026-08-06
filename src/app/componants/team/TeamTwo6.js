'use client';
import teamTwo from "@/app/data/teamTwo";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

import Link from "next/link";
import { Button } from 'react-bootstrap';

const { title, tagline, socials, teams } = teamTwo;

const TeamTwo6 = ({ className = "" }) => {
  return (
    <section className={`team-one ${className}`}>
    <Container>
      {!className && (
        <Title title={title} tagline={tagline} className="text-center section-titleT" />
      )}
       <Row>
           {teams
            .slice(0, className ? undefined : 10)
            .map (({ id, name, title, image , describe }) => (
              <Col key={id} xl={6} lg={6} md={12} className="animated fadeInUp">
               <div className="team-two__Double" style={{background: "#1D4224"}}>               
                  <div className="team-two__img">
                    <Image
                      src={require(`@/assets/images/team/${image}`).default.src}
                      alt=""
                    />
                </div>    
                <div className="team-two__details">
                      <h4 className="team-two__name">{name}</h4>
                      <p className="team-two__title">{title}</p>
                      <p className="team-two__title1">{describe}</p>
                      <div className="team-one__social">

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

export default TeamTwo6;
