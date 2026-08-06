"use client";
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import whychooseUSlogo from '@/app/data/whychooseUSlogo';

import Designers from "@/assets/images/resources/prf-design.png";
import grnty from "@/assets/images/resources/100grnty.png";
import unilogo from "@/assets/images/resources/uni-logo.png";
import hour from "@/assets/images/resources/247.png";

const {
  HeadTitle,
  WCHTxt1, WCHTxt2, WCHTxt3, WCHTxt4,
  WCUH1, WCUH2, WCUH3, WCUH4
} = whychooseUSlogo;

const cardStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
  height: '100%',
};

const headingStyle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  margin: '10px 0',
};

const paragraphStyle = {
  fontSize: '0.95rem',
  color: '#555',
  lineHeight: '1.6',
};

const imageStyle = {
  maxWidth: '80px',
  height: 'auto',
  marginBottom: '15px',
};

function WhyChooseUSLogo() {
  return (
    <section style={{ backgroundColor: '#fefefe', padding: '50px 0' }}>
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>{HeadTitle}</h1>
        <Row className="g-4">
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={cardStyle}>
              <Image src={Designers.src} alt="Designers" style={imageStyle} />
              <h2 style={headingStyle}>{WCUH1}</h2>
              <p style={paragraphStyle}>{WCHTxt1}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={cardStyle}>
              <Image src={grnty.src} alt="Guarantee" style={imageStyle} />
              <h2 style={headingStyle}>{WCUH2}</h2>
              <p style={paragraphStyle}>{WCHTxt2}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={cardStyle}>
              <Image src={unilogo.src} alt="Unique" style={imageStyle} />
              <h2 style={headingStyle}>{WCUH3}</h2>
              <p style={paragraphStyle}>{WCHTxt3}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={cardStyle}>
              <Image src={hour.src} alt="Support" style={imageStyle} />
              <h2 style={headingStyle}>{WCUH4}</h2>
              <p style={paragraphStyle}>{WCHTxt4}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUSLogo;
