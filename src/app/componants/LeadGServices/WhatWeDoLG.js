'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPen, FaLaptop, FaBullhorn, FaEnvelope, FaSearch, FaChartBar } from 'react-icons/fa';

const leadServices = [
  {
    icon: <FaPen size={40} color="#003f87" />,
    title: 'Content Marketing & Strategy',
    description: 'Crafting blogs, videos, infographics, and social media campaigns to attract and educate potential leads.',
  },
  {
    icon: <FaLaptop size={40} color="#003f87" />,
    title: 'Landing Page & Conversion Optimization',
    description: 'Designing high-converting landing pages with clear CTAs and forms to capture leads effectively.',
  },
  // {
  //   icon: <FaBullhorn size={40} color="#003f87" />,
  //   title: 'Paid Advertising (PPC & Social Ads)',
  //   description: 'Running targeted ads on Google, Facebook, Instagram, and LinkedIn to drive qualified traffic.',
  // },
  {
    icon: <FaEnvelope size={40} color="#003f87" />,
    title: 'Email Marketing & Lead Nurturing',
    description: 'Automating email sequences to nurture leads and guide them down the sales funnel.',
  },
  {
    icon: <FaSearch size={40} color="#003f87" />,
    title: 'SEO & Organic Traffic Growth',
    description: 'Optimizing websites and content to rank higher in search engines and attract inbound leads.',
  },
  {
    icon: <FaChartBar size={40} color="#003f87" />,
    title: 'Analytics, Reporting & Optimization',
    description: 'Tracking campaigns, analyzing results, and refining strategies for better lead quality and ROI.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const LeadGenerationServices = () => {
  return (
    <section style={{ background: '#f9f9f9', padding: '80px 0' }}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '60px',
            color: '#003f87',
          }}
        >
          Our Lead Generation Services
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <Row>
            {leadServices.map((service, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                  <h5 style={{ fontWeight: '600', marginBottom: '15px' }}>{service.title}</h5>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>{service.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default LeadGenerationServices;
