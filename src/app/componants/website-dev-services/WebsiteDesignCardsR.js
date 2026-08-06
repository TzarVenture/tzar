"use client";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import websiteDevCard from '@/app/data/websiteDevCards';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

import icon11 from '@/assets/images/icons/shopify.png';
import icon12 from '@/assets/images/icons/react.png';

const {
  HeadTitle, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4,
  title5, subtitle5, title6, subtitle6, title7, subtitle7, title8, subtitle8,
  title9, subtitle9, title10, subtitle10, title11, subtitle11, title12, subtitle12
} = websiteDevCard;

function WebsiteDesignCardsR({ className = "" }) {
  return (
    <section
  className="WebsiteDevelopment-page"
  style={{
    margin: 0,
    padding: "40px 0 10px",
    height: "auto",
    background: "#f8f8f8",
  }}
>

      <Container>
        <h1 className="section-title__title text-center">{HeadTitle}</h1>
        <Row className="g-4">
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <BsIcons.BsCart3 className="wdiconsnew"/>
              <h3 className="WDGoals__text">{title1}</h3>
              <p className="WDGoals__text1">{subtitle1}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <MdIcons.MdComputer className="wdiconsnew" />
              <h3 className="WDGoals__text">{title2}</h3>
              <p className="WDGoals__text1">{subtitle2}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <AiIcons.AiFillAndroid className="wdiconsnew" />
              <h3 className="WDGoals__text">{title3}</h3>
              <p className="WDGoals__text1">{subtitle3}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <DiIcons.DiMagento className="wdiconsnew" />
              <h3 className="WDGoals__text">{title4}</h3>
              <p className="WDGoals__text1">{subtitle4}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <AiIcons.AiFillHtml5 className="wdiconsnew" />
              <h3 className="WDGoals__text">{title5}</h3>
              <p className="WDGoals__text1">{subtitle5}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <ImIcons.ImWordpress className="wdiconsnew" />
              <h3 className="WDGoals__text">{title6}</h3>
              <p className="WDGoals__text1">{subtitle6}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <BsIcons.BsFillFileEarmarkCodeFill className="wdiconsnew" />
              <h3 className="WDGoals__text">{title7}</h3>
              <p className="WDGoals__text1">{subtitle7}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <SiIcons.SiPhp className="wdiconsnew" />
              <h3 className="WDGoals__text">{title8}</h3>
              <p className="WDGoals__text1">{subtitle8}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <FaIcons.FaDrupal className="wdiconsnew" />
              <h3 className="WDGoals__text">{title9}</h3>
              <p className="WDGoals__text1">{subtitle9}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <FaIcons.FaJoomla className="wdiconsnew" />
              <h3 className="WDGoals__text">{title10}</h3>
              <p className="WDGoals__text1">{subtitle10}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <Image src={icon11.src} className="wdiconsnew" alt="Shopify" />
              <h3 className="WDGoals__text">{title11}</h3>
              <p className="WDGoals__text1">{subtitle11}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="CardWDnew">
              <Image src={icon12.src} className="wdiconsnew" alt="React" />
              <h3 className="WDGoals__text">{title12}</h3>
              <p className="WDGoals__text1">{subtitle12}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WebsiteDesignCardsR;
