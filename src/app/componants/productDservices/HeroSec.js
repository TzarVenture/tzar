/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductPackagingHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Text Section */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title" style={{color: "#1D4224"}}>
            Product Packaging <br /> that Sells Your Brand
          </h1>
          <p className="hero-subtext">
            First impressions matter — and your product’s packaging is the first thing customers notice. Our Product Design & Packaging Service helps brands stand out with creative, functional, and market-ready packaging that tells your story, attracts buyers, and builds trust. From concept to final design, we deliver solutions tailored to your brand.
          </p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Link href="#Contactform">
              <Button className="hero-btn"  style={{
                    backgroundColor: '#003108',
                    color: '#fff',
                    padding: '12px 30px',
                    fontSize: '16px',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                  }} >Enquire Now</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://i.pinimg.com/736x/bc/11/00/bc11009f65a1eb281ae82faa9782a4d0.jpg"
            alt="Product Packaging"
          />
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #f8f9ff 0%, #eef3ff 100%);
          color: #1D4224;
          padding: 100px 20px;
        }

        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 40px;
          flex-direction: row;
        }

        .hero-text {
          flex: 1;
          padding: 20px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-subtext {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: #333;
          max-width: 520px;
        }

        .hero-buttons {
        background-color: #003366;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .hero-image {
          flex: 1;
          text-align: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        /* Tablets (iPads) and up - desktop layout */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtext {
            font-size: 1.1rem;
          }
        }

        /* Small tablets / large phones */
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .hero-text,
          .hero-image {
            width: 100%;
            padding: 0 10px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtext {
            font-size: 1rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image img {
            max-width: 90%;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.7rem;
          }

          .hero-btn {
            width: 100%;
            text-align: center;
            padding: 10px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductPackagingHero;
