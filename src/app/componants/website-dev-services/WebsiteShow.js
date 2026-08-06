"use client";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

import atpshopweb from "@/assets/images/icons/atpshopweb.gif";
import aplloweb from "@/assets/images/icons/aplloweb.gif";
import cabiloweb from "@/assets/images/icons/cabiloweb.gif";
import mahaaraja from "@/assets/images/icons/mahaarajaweb.gif";

function WebsiteShow() {
  const websites = [
    { href: "https://allthingspriti.com/", src: atpshopweb.src, title: "AllThingsPriti" },
    { href: "https://www.apolloindia.co/", src: aplloweb.src, title: "Apollo India" },
    { href: "https://cabelochave.com/", src: cabiloweb.src, title: "Cabelo Chave" },
    { href: "https://mahaarajaa.life/", src: mahaaraja.src, title: "Mahaarajaa" },
  ];

  return (
    <section className="website-show py-5">
      <div className="container-fluid">
        <h1 className="section-title__title text-center mb-4" style={{color :"#1D4224"}}>Built in Shopify</h1>

        <div className="website-grid">
          {websites.map((item, index) => (
            <div key={index} className="website-card">
              <Link href={item.href} target="_blank" className="d-block text-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  fluid
                  className="rounded shadow-sm website-img"
                />
                <h3 className="web-titleshow mt-3">{item.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .website-show {
          background: transparent;
        }

        .section-title__title {
          font-size: 2rem;
          font-weight: 600;
          color: #063b81;
        }

        .website-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          justify-items: center;
          align-items: start;
          padding: 0 20px;
        }

        .website-card {
          text-align: center;
        }

        .website-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          transition: transform 0.3s ease;
        }

        .website-img:hover {
          transform: scale(1.05);
        }

        .web-titleshow {
          color: #333;
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 10px;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .website-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .website-img {
            max-width: 260px;
          }
        }

        @media (max-width: 768px) {
          .website-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .website-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default WebsiteShow;
