"use client";
import React from "react";
import { Image } from "react-bootstrap";
import Title from "../Reuseable/Title";

import Pr1 from "@/assets/images/projects/r1.jpg";
import Pr2 from "@/assets/images/projects/r2.jpg";
import Pr3 from "@/assets/images/projects/r3.jpg";
import Pr4 from "@/assets/images/projects/r4.jpg";
import Pr5 from "@/assets/images/projects/r5.jpg";
import Pr6 from "@/assets/images/projects/r6.jpg";
import Pr7 from "@/assets/images/projects/r7.jpg";
import Pr8 from "@/assets/images/projects/r8.jpg";
import Pr9 from "@/assets/images/projects/r9.jpg";
import Pr10 from "@/assets/images/projects/r10.jpg";
import Pr11 from "@/assets/images/projects/r11.jpg";
import Pr12 from "@/assets/images/projects/r12.jpg";
import Pr13 from "@/assets/images/projects/r13.jpg";
import Pr14 from "@/assets/images/projects/r14.jpg";
import Pr15 from "@/assets/images/projects/r15.jpg";
import Pr16 from "@/assets/images/projects/r16.jpg";
import Pr17 from "@/assets/images/projects/r17.jpg";
import Pr18 from "@/assets/images/projects/Website 5.png";
import Pr19 from "@/assets/images/projects/r19.png";
import Pr20 from "@/assets/images/projects/r20.png";
import Pr21 from "@/assets/images/projects/r21.png";
import Pr22 from "@/assets/images/projects/Website 4.png";

// LOGOS
import Logo1 from "@/assets/images/projects/Artboard 17.webp";
import Logo2 from "@/assets/images/projects/Artboard 15.png";
import Logo3 from "@/assets/images/projects/Artboard 16.png";
import Logo4 from "@/assets/images/projects/Artboard 14.png";
import Logo5 from "@/assets/images/projects/Artboard 13.png";
import Logo6 from "@/assets/images/projects/Artboard 5.png";
import Logo7 from "@/assets/images/projects/Artboard 9.png";
import Logo8 from "@/assets/images/projects/Artboard 3.png";
import Logo9 from "@/assets/images/projects/Artboard 8.png";
import Logo10 from "@/assets/images/projects/Artboard 1.png";
import Logo11 from "@/assets/images/projects/Artboard 20 (1).png";
import Logo12 from "@/assets/images/projects/Artboard 19 (1).png";
import Logo13 from "@/assets/images/projects/Artboard 17 (1).png";
import Logo14 from "@/assets/images/projects/Artboard 18 (1).png";
import Logo15 from "@/assets/images/projects/Artboard 7.png";
import Logo16 from "@/assets/images/projects/Artboard 4.png";
import Logo17 from "@/assets/images/projects/Artboard 2.png";
import Logo18 from "@/assets/images/projects/Artboard 6.png";
import Logo19 from "@/assets/images/projects/Artboard 12.png";
import Logo20 from "@/assets/images/projects/Artboard 11.png";
import Logo21 from "@/assets/images/projects/Artboard 1.png";
import Logo22 from "@/assets/images/projects/Artboard 10.png";
import Logo23 from "@/assets/images/projects/Artboard 22.webp";

function WebDesign() {
  const data = [
    {
    id: 17,
    img: Pr22,
    logo: Logo23,
    title: "Crownleaf",
    link: "https://crownleaf.co/",
    services: [
      "WordPress Website Development",
      "Social Media",
      "SEO Optimization",
      "SMM",
    ],
  },
  // {
  //   id: 17,
  //   img: Pr18,
  //   logo: Logo1,
  //   title: "Titepo",
  //   link: "#",
  //   services: [
  //     "WordPress Website Development",
  //     "Social Media",
  //     "SEO Optimization",
  //     "SMM",
  //   ],
  // },
  // {
  //   id: 18,
  //   img: Pr18,
  //   logo: Logo2,
  //   title: "Ankam",
  //   link: "https://ankamplay.com/",
  //   services: [
  //     "WordPress Website Development",
  //     "Ui/Ux Strategy",
  //   ],
  // },
  {
    id: 19,
    img: Pr21,
    logo: Logo3,
    title: "Gurukul Vatika",
    link: "https://gurukulvatika.com/",
    services: [
      "WordPress Website Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 20,
    img: Pr19,
    logo: Logo4,
    title: "softdots",
    link: "https://softdots.deepakwp.in/",
    services: [
      "WordPress Website Development",
      "Social Media",
      "SEO Optimization",
      "SMM",
    ],
  },
  {
    id: 21,
    img: Pr20,
    logo: Logo5,
    title: "Chadar Mahotsav",
    link: "https://chadarmahotsav.com/",
    services: [
      "WordPress Website Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 22,
    img: Pr18,
    logo: Logo6,
    title: "Kp",
    link: "https://kpmumbai.com/",
    services: [
      "Shopify Development",
      "Social Media",
      "SEO Optimization",
      "SMM",
    ],
  },

  // MAIN LIST START
  {
    id: 1,
    img: Pr1,
    logo: Logo7,
    title: "Apollo India",
    link: "https://apolloindia.com",
    services: [
      "Shopify Development",
      "Social Media",
      "SEO Optimization",
    ],
  },
  {
    id: 2,
    img: Pr2,
    logo: Logo8,
    title: "Mahaarajaa",
    link: "https://mahaarajaa.life/",
    services: [
      "Shopify Development",
      "Social Media",
      "SMM",
    ],
  },
  {
    id: 3,
    img: Pr3,
    logo: Logo9,
    title: "Blue7Vets",
    link: "https://blue7vets.com",
    services: [
      "WordPress Website Development",
      "Social Media",
      "SEO Optimization",
      "SMM",
    ],
  },
  {
    id: 4,
    img: Pr4,
    logo: Logo10,
    title: "Cabelo Chave",
    link: "https://cabelochave.com/",
    services: [
      "Shopify Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 5,
    img: Pr5,
    logo: Logo11,
    title: "Doordash",
    link: "https://www.doordash.com/",
    services: [
      "Custom Web Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 7,
    img: Pr7,
    logo: Logo12,
    title: "Orcollective",
    link: "https://orcollective.co.uk/",
    services: [
      "Shopify Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 8,
    img: Pr8,
    logo: Logo13,
    title: "Staples",
    link: "https://www.staples.com/",
    services: [
      "Custom Web Development",
      "Social Media",
    ],
  },
  {
    id: 9,
    img: Pr9,
    logo: Logo14,
    title: "Target",
    link: "https://www.target.com/",
    services: [
      "Custom Web Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 10,
    img: Pr10,
    logo: Logo15,
    title: "DIY Mumbai",
    link: "https://diyguru-mumbai.org/",
    services: [
      "WordPress Website Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 11,
    img: Pr11,
    logo: Logo16,
    title: "Little Flower Children School, Mau",
    link: "http://www.lfcsmau.co/",
    services: [
      "WordPress Website Development",
      "Social Media",
    ],
  },
  {
    id: 12,
    img: Pr12,
    logo: Logo17,
    title: "Urbanladder",
    link: "https://www.urbanladder.com/",
    services: [
      "Custom Website Work",
      "SEO Optimization",
    ],
  },
  {
    id: 13,
    img: Pr13,
    logo: Logo18,
    title: "Femmella",
    link: "https://www.femmella.com/",
    services: [
      "Shopify Development",
      "SEO Optimization",
    ],
  },
  {
    id: 14,
    img: Pr14,
    logo: Logo19,
    title: "Printshop",
    link: "https://www.printshop.com/",
    services: [
      "Custom Web Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 15,
    img: Pr15,
    logo: Logo20,
    title: "Cadd Centre Thane",
    link: "https://caddcentrethane.com/",
    services: [
      "WordPress Website Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 16,
    img: Pr16,
    logo: Logo21,
    title: "Happy Brews",
    link: "https://happybrews.co.in/",
    services: [
      "WordPress Website Development",
      "Ui/Ux Strategy",
    ],
  },
  {
    id: 18,
    img: Pr18,
    logo: Logo22,
    title: "The Clothing Factory",
    link: "https://theclothingfactory.in/",
    services: [
      "Shopify Development", 
      "Ui/Ux Strategy",
    ],
  },
];

  const bgColors = [
  "#D0E4DA", // darker of #E7F1ED
  "#F3D2C4", // darker of #FAE9E1
  "#E5DCC2", // darker of #F3EDDD
  "#E6F0D1", // darker of #F5F9E9
  "#F1D3DD", // darker of #F9EAEF
  "#E1D9C9", // darker of #F3EFE5
  "#D3EEE4", // darker of #EAF7F3
  "#F3E0CF"  // darker of #FAF0E4
];


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        padding: "2rem 0",
        justifyItems: "center",
      }}
    >
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%", textDecoration: "none", color: "inherit" }}
        >
          <div
  style={{
    width: "100%",
    background: bgColors[index % bgColors.length],
    borderRadius: "18px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    cursor: "pointer",

    // ⭐ FIXED HEIGHT FOR ALL BOXES
    height: "430px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
  }}
>
  {/* TAGS */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1rem",

      // ⭐ FIXED HEIGHT
      height: "60px",
      overflow: "hidden",
    }}
  >
    {item.services?.map((service, i) => (
      <span
        key={i}
        style={{
          background: "#fff",
          color: "#333",
          fontSize: "13px",
          padding: "4px 10px",
          borderRadius: "50px",
          whiteSpace: "nowrap",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {service}
      </span>
    ))}
  </div>

  {/* LOGO */}
  <div
    style={{
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "1rem",
    }}
  >
    <Image
      src={item.logo.src}
      alt={item.title + " logo"}
      style={{
        maxWidth: "120px",
        maxHeight: "50px",
        objectFit: "contain",
        opacity: 0.95,
      }}
    />
  </div>

  {/* IMAGE */}
  <div
    style={{
      height: "140px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "1rem",
    }}
  >
    <Image
      src={item.img.src}
      alt={item.title}
      style={{
        maxWidth: "80%",
        maxHeight: "130px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* TITLE */}
  <div style={{ height: "60px" }}>
    <h5
      style={{
        fontSize: "15px",
        fontWeight: "500",
        color: "#111",
        lineHeight: "1.4",
      }}
    >
      Website Development for{" "}
      <span
        style={{
          fontWeight: "600",
          color: "#222",
          display: "block",
        }}
      >
        {item.title}
      </span>
    </h5>
  </div>
</div>

        </a>
      ))}
    </div>
  );
}

export default WebDesign;
