'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const GraphicDesigning = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  // ✅ Check screen width on mount & resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenSize('mobile'); // phones
      else if (width <= 1024) setScreenSize('tablet'); // tablets/iPad Pro
      else setScreenSize('desktop');
    };

    handleResize(); // run once on load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust styles based on screen size
  const sectionPadding =
    screenSize === 'mobile' ? '60px 0 30px 0' : screenSize === 'tablet' ? '80px 0 40px 0' : '100px 0';
  const sectionMinHeight = screenSize === 'desktop' ? '100vh' : 'auto';
  const headingSize = screenSize === 'mobile' ? '2rem' : screenSize === 'tablet' ? '2.2rem' : '2rem';
  const titleSize = screenSize === 'mobile' ? '2rem' : screenSize === 'tablet' ? '2.4rem' : '2.8rem';
  const textSize = screenSize === 'mobile' ? '1rem' : screenSize === 'tablet' ? '1.05rem' : '1.1rem';
  const headingMarginBottom = screenSize === 'mobile' ? '30px' : screenSize === 'tablet' ? '35px' : '40px';
  const colMarginBottom = screenSize === 'mobile' ? '15px' : screenSize === 'tablet' ? '20px' : '30px';

  return (
    <section
      style={{
        background: '#fff',
        padding: sectionPadding,
        color: 'black',
        minHeight: sectionMinHeight,
      }}
    >
      <Container>
        {/* Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            fontSize: headingSize,
            fontWeight: '600',
            marginBottom: headingMarginBottom,
            color: '#003108',
          }}
        >
          Welcome to Our Digital Solutions
        </motion.h2>

        <Row className="align-items-center">
          {/* Left Column: Title and Text */}
          <Col md={6} style={{ textAlign: 'left', marginBottom: colMarginBottom }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 style={{ fontSize: titleSize, fontWeight: 'bold', marginBottom: '15px', color: "#1D4224" }}>
                Amplify Your Social Presence
              </h1>
              <p style={{ fontSize: textSize, marginBottom: '15px', lineHeight: '1.6' }}>
                Transforming ideas into powerful visuals — our graphic design solutions blend creativity with strategy to deliver designs that inspire, engage, and communicate your brand story effectively. From logos and branding to digital creatives and print designs, we bring concepts to life with a modern aesthetic and attention to detail.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button
                  href="#"
                  style={{
                    backgroundColor: '#003108',
                    color: '#fff',
                    padding: '12px 30px',
                    fontSize: '16px',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                  }}
                >
                  Enquiry Now
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.img
              src="https://t4.ftcdn.net/jpg/03/06/44/55/360_F_306445529_dFXbKcu8oAYESRfm7MFujNqAs89tc186.jpg"
              alt="Hero Image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GraphicDesigning;
