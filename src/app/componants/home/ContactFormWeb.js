import React from 'react';
import contactForm from "@/app/data/contactForm";
import { Col, Container, Row } from "react-bootstrap";
import WebServicesContactForm from '../contact/WebServiceContactForm';

const { bg } = contactForm;

function ContactFormSection() {
  return (
    <section 
      id="Contactform" 
      className="ContactForm-page" 
      style={{ 
        position: "relative", 
        paddingTop: "40px",  // reduced from default py-5
        paddingBottom: "40px" // reduced from default py-5
      }}
    >
      {/* Background */}
      <div
        className="counter-one-pattern"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        }}
      ></div>

      <Container>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}> {/* reduced marginBottom */}
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#003108', marginBottom: '10px' }}>
            We Can Get Massive Traffic To Your Website
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>
            TZAR DIGITAL MARKETING AGENCY
          </p>
        </div>

        <Row className="align-items-center justify-content-center">
          {/* Contact Form Column */}
          <Col xs={12} lg={5} className="mb-3 mb-lg-0 px-2">
            <div className="form-dev-enquiry">
            <WebServicesContactForm/>
            </div>
          </Col>

          {/* Text Content Column */}
          <Col xs={12} lg={5} className="px-2">
            <div className="ContactForm-page__right text-start">
              <div className="boximp">
                <p className="mb-2" style={{ fontSize: '0.95rem', lineHeight: '1.4', color: '#333' }}>
                  SEO | Content Marketing | Paid Search Marketing | Social Media | Analytics | Programmatic Advertising
                </p>

                <div className="important">
                  <h5 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                    <span className="highlight1" style={{ color: '#003108', fontWeight: 'bold' }}>SEO</span> – Bring huge traffic through SEO strategies.
                  </h5>
                  <h5 style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                    <span className="highlight1" style={{ color: '#003108', fontWeight: 'bold' }}>Paid Media</span> – Strategies with guaranteed ROI.
                  </h5>
                  <h5 style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                    <span className="highlight1" style={{ color: '#003108', fontWeight: 'bold' }}>Content Marketing</span> – Attractive and creative content which will increase customer engagement and traffic.
                  </h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactFormSection;
