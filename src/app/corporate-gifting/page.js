"use client";

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Images
import Employee from "@/assets/images/backgrounds/employee.webp";
import Employee1 from "@/assets/images/backgrounds/employee1.webp";
import Employee2 from "@/assets/images/backgrounds/employee2.webp";
import Client from "@/assets/images/backgrounds/client.webp";
import Client1 from "@/assets/images/backgrounds/client1.webp";
import Wlcm1 from "@/assets/images/backgrounds/wlcm1.webp";
import Wlcm4 from "@/assets/images/backgrounds/wlcm4.webp";
import Wlcm3 from "@/assets/images/backgrounds/wlcm3.webp";
import Cust1 from "@/assets/images/backgrounds/cust1.webp";
import Cust2 from "@/assets/images/backgrounds/cust2.webp";
import Cust3 from "@/assets/images/backgrounds/cust3.webp";
import topBanner from "@/assets/images/backgrounds/banner.webp";

import Promo1 from "@/assets/images/backgrounds/Promo1.webp";
import Promo2 from "@/assets/images/backgrounds/promo2.webp";
import Promo3 from "@/assets/images/backgrounds/promo3.webp";
import Promo4 from "@/assets/images/backgrounds/promo4.webp";
import Promo5 from "@/assets/images/backgrounds/promo5.webp";
import Promo6 from "@/assets/images/backgrounds/promo6.webp";
import Promo7 from "@/assets/images/backgrounds/promo7.webp";
import Promo8 from "@/assets/images/backgrounds/promo8.webp";
import Promo9 from "@/assets/images/backgrounds/promo9.webp";
import Promo10 from "@/assets/images/backgrounds/promo10.webp";
import Promo11 from "@/assets/images/backgrounds/promo11.webp";
import Promo12 from "@/assets/images/backgrounds/promo12.webp";
import Promo13 from "@/assets/images/backgrounds/promo13.webp";
import Promo14 from "@/assets/images/backgrounds/promo14.webp";
import Promo15 from "@/assets/images/backgrounds/promo15.webp";
import Promo16 from "@/assets/images/backgrounds/promo16.webp";
import Promo17 from "@/assets/images/backgrounds/promo17.webp";
import Promo18 from "@/assets/images/backgrounds/promo18.webp";
import Promo19 from "@/assets/images/backgrounds/promo19.webp";
import Promo20 from "@/assets/images/backgrounds/promo20.webp";

/* --------------------------
   PRODUCT DATA
-------------------------- */
const employeeGiftingProducts = [
  { id: 1, name: "Sharp and Steely Gift Hamper", img: Employee },
  { id: 2, name: "Savvy and Sustainable Gift Hamper", img: Employee1 },
  { id: 3, name: "The Eco-Employee Gift Hamper", img: Employee2 },
];

const clientGiftingProducts = [
  { id: 1, name: "Caffienated Techie Gift Hamper", img: Client },
  { id: 2, name: "Mighty Gift Trunk", img: Client1 },
];

const welcomeKitProducts = [
  { id: 1, name: "Savvy and Sustainable Gift Hamper", img: Wlcm1 },
  { id: 2, name: "Sharp and Steely Gift Hamper", img: Wlcm3 },
  { id: 3, name: "The Eco-Employee Gift Hamper", img: Wlcm4 },
];

const customProducts = [
  { id: 1, name: "Box - Beige", img: Cust1 },
  { id: 2, name: "Box - Green", img: Cust2 },
  { id: 3, name: "Box - Black", img: Cust3 },
];

const promotionalProducts = [
  { id: 1, name: "Bamboo Coffee Sipper", img: Promo1 },
  { id: 2, name: "Champagne Flute", img: Promo2 },
  { id: 3, name: "Copper Bottle Set", img: Promo3 },
  { id: 4, name: "Glass Bottle – Tyrel", img: Promo4 },
  { id: 5, name: "Sipper – Laba", img: Promo5 },
  { id: 6, name: "Passport Organizer", img: Promo6 },
  { id: 7, name: "Passport Pouch", img: Promo7 },
  { id: 8, name: "Storage pouches – felt", img: Promo8 },
  { id: 9, name: "Sunglass pouch", img: Promo9 },
  { id: 10, name: "Crochet Coaster – Mia", img: Promo10 },
  { id: 11, name: "Deskmate- Multipurpose Pad", img: Promo11 },
  { id: 12, name: "Foldable Mouse Pad – ZEN", img: Promo12 },
  { id: 13, name: "Seed paper Calendar 2025", img: Promo13 },
  { id: 14, name: "Whippy- Foldable Mobile Stand", img: Promo14 },
  { id: 15, name: "Blue Arrow- Journal", img: Promo15 },
  { id: 16, name: "Journal – Dante", img: Promo16 },
  { id: 17, name: "Journal – Newton", img: Promo17 },
  { id: 18, name: "Journal – Leer", img: Promo18 },
  { id: 19, name: "Journal – Libro Black", img: Promo19 },
  { id: 20, name: "Notes organizer", img: Promo20 },
];

/* ----------------------------
   Styles inserted in-component
   (keeps file self-contained)
---------------------------- */

const styles = `
/* outer wrapper controls side spacing equally on all sizes */
.grid-outer {
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
}

/* center content and limit max width so left/right margins are equal */
.grid {
  max-width: 1200px; /* adjust if you want wider container */
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* default 3 columns */
  gap: 22px;
  align-items: start;
  box-sizing: border-box;
}

/* grid item centers the card and ensures equal side padding */
.grid-item {
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

/* card sizing */
.grid-item .card {
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  cursor: pointer;
}

/* image sizes */
.grid-item .card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
}

/* title */
.grid-item .card .card-title {
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
}

/* enquiry button */
.enq-btn {
  padding: 6px 20px;
  border-radius: 999px;
  background: transparent;
  border: 1.5px solid #003108;
  color: #003108;
  font-size: .85rem;
  font-weight: 500;
  cursor: pointer;
}

/* responsive breakpoints */
/* 2 columns for medium screens */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 0;
    padding-right: 0;
  }
}

/* 1 column for small screens */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 18px;
    padding-left: 0;
    padding-right: 0;
  }
  .grid-outer {
    padding-left: 12px;
    padding-right: 12px;
  }
  .grid-item .card img {
    height: 200px;
  }
}
`;

/* ----------------------------
   ProductCard (now plain component markup)
   We render cards into the CSS Grid (not using Row/Col)
---------------------------- */
const ProductCardGridItem = ({ product, link }) => {
  return (
    <div className="grid-item">
      <div
        className="card"
        onClick={() => {
          if (link) window.location.href = link;
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <img src={product.img.src} alt={product.name} />
        <div className="card-body" style={{ padding: 15 }}>
          <h5 className="card-title" style={{ marginBottom: 12 }}>
            {product.name}
          </h5>
          <div style={{ textAlign: "center" }}>
            <button
              className="enq-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (link) window.open(link, "_blank");
              }}
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------
   ProductGrid (uses CSS Grid)
---------------------------- */
const ProductGrid = ({ products, link }) => {
  return (
    <div className="grid-outer" style={{ marginTop: 18, marginBottom: 18 }}>
      <div className="grid" role="list">
        {products.map((p) => (
          <ProductCardGridItem key={p.id} product={p} link={link} />
        ))}
      </div>
    </div>
  );
};

/* ----------------------------
   Tab styles object (kept inline)
---------------------------- */
const tabStyles = {
  tabList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    padding: "0 12px",
    marginBottom: "25px",
    borderBottom: "none",
  },
  tab: {
    padding: "8px 20px",
    borderRadius: "999px",
    background: "#f0f0f0",
    border: "1px solid transparent",
    cursor: "pointer",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  tabSelected: {
    background: "#003108",
    color: "#fff",
    borderColor: "#003108",
  },
};

/* ----------------------------
   Main Component
---------------------------- */
export default function CorporateGiftingPage() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Inlined styles block */}
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${topBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 300,
          padding: "40px 20px",
        }}
      />

      {/* MAIN SECTION */}
      <section style={{ padding: "40px 10px", background: "#f8f9fa" }}>
        <div style={{ padding: "0 12px" }}>
          <h2 style={{ textAlign: "center", marginBottom: 20, fontSize: 22 }}>
            Our Gifting Solutions
          </h2>
        </div>

        <div style={{ padding: "0 12px" }}>
          <Tabs selectedIndex={tabIndex} onSelect={(i) => setTabIndex(i)}>
            <TabList style={tabStyles.tabList}>
              {[
                "Employee Gifting",
                "Client Gifting",
                "Welcome Kit",
                "Custom Packaging",
                "Promotional Products",
                "Bulk Orders",
              ].map((t, i) => (
                <Tab
                  key={i}
                  style={{
                    ...tabStyles.tab,
                    ...(tabIndex === i ? tabStyles.tabSelected : {}),
                  }}
                >
                  {t}
                </Tab>
              ))}
            </TabList>

            <TabPanel>
              <ProductGrid
                products={employeeGiftingProducts}
                link="https://crownleaf.co/"
              />
            </TabPanel>

            <TabPanel>
              <ProductGrid
                products={clientGiftingProducts}
                link="https://crownleaf.co/product-category/client-gifts/"
              />
            </TabPanel>

            <TabPanel>
              <ProductGrid
                products={welcomeKitProducts}
                link="https://crownleaf.co/product-category/welcome-kit/"
              />
            </TabPanel>

            <TabPanel>
              <ProductGrid products={customProducts} link="https://crownleaf.co/" />
            </TabPanel>

            <TabPanel>
              <ProductGrid products={promotionalProducts} link="https://crownleaf.co/" />
            </TabPanel>

            <TabPanel>
              <div style={{ textAlign: "center", padding: 20 }}>
                <a
                  href="https://crownleaf.co/bulk-enquiry/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 24px",
                    borderRadius: 25,
                    background: "#003108",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Bulk Enquiry
                </a>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
}



// "use client";

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Employee from "@/assets/images/backgrounds/employee.webp";
// import Employee1 from "@/assets/images/backgrounds/employee1.webp";
// import Employee2 from "@/assets/images/backgrounds/employee2.webp";
// import Client from "@/assets/images/backgrounds/client.webp";
// import Client1 from "@/assets/images/backgrounds/client1.webp";
// import Promo1 from "@/assets/images/backgrounds/Promo1.webp";
// import Promo2 from "@/assets/images/backgrounds/promo2.webp";
// import Promo3 from "@/assets/images/backgrounds/promo3.webp";
// import Promo4 from "@/assets/images/backgrounds/promo4.webp";
// import Promo5 from "@/assets/images/backgrounds/promo5.webp";
// import Promo6 from "@/assets/images/backgrounds/promo6.webp";
// import Promo7 from "@/assets/images/backgrounds/promo7.webp";
// import Promo8 from "@/assets/images/backgrounds/promo8.webp";
// import Promo9 from "@/assets/images/backgrounds/promo9.webp";
// import Promo10 from "@/assets/images/backgrounds/promo10.webp";
// import Promo11 from "@/assets/images/backgrounds/promo11.webp";
// import Promo12 from "@/assets/images/backgrounds/promo12.webp";
// import Promo13 from "@/assets/images/backgrounds/promo13.webp";
// import Promo14 from "@/assets/images/backgrounds/promo14.webp";
// import Promo15 from "@/assets/images/backgrounds/promo15.webp";
// import Promo16 from "@/assets/images/backgrounds/promo16.webp";
// import Promo17 from "@/assets/images/backgrounds/promo17.webp";
// import Promo18 from "@/assets/images/backgrounds/promo18.webp";
// import Promo19 from "@/assets/images/backgrounds/promo19.webp";
// import Promo20 from "@/assets/images/backgrounds/promo20.webp";
// import Wlcm1 from "@/assets/images/backgrounds/wlcm1.webp";
// import Wlcm4 from "@/assets/images/backgrounds/wlcm4.webp";
// import Wlcm3 from "@/assets/images/backgrounds/wlcm3.webp";
// import Cust1 from "@/assets/images/backgrounds/cust1.webp";
// import Cust2 from "@/assets/images/backgrounds/cust2.webp";
// import Cust3 from "@/assets/images/backgrounds/cust3.webp";
// import topBanner from "@/assets/images/backgrounds/banner.webp";
// import ContactForm from "../componants/contact/ContactForm";

// // --- Sample Product Data ---
// const employeeGiftingProducts = [
//   {
//     id: 1,
//     name: "Sharp and Steely Gift Hamper",
//     img: Employee,
//     category: "Technology",
//   },
//   {
//     id: 2,
//     name: "Savvy and Sustainable Gift Hamper",
//     img: Employee1,
//     category: "Mobile",
//   },
//   {
//     id: 3,
//     name: "The Eco-Employee Gift Hamper",
//     img: Employee2,
//     category: "Audio",
//   },
// ];

// const clientGiftingProducts = [
//   {
//     id: 1,
//     name: "Caffienated Techie Gift Hamper",
//     img: Client,
//     category: "Technology",
//   },
//   {
//     id: 2,
//     name: "Mighty Gift Trunk",
//     img: Client1,
//     category: "Mobile",
//   },
// ];

// const welcomeKitProducts = [
//   {
//     id: 1,
//     name: "Savvy and Sustainable Gift Hamper",
//     img: Wlcm1,
//     category: "Technology",
//   },
//   {
//     id: 2,
//     name: "Sharp and Steely Gift Hamper",
//     img: Wlcm3,
//     category: "Technology",
//   },
//   {
//     id: 3,
//     name: "The Eco-Employee Gift Hamper",
//     img: Wlcm4,
//     category: "Mobile",
//   },
// ];

// const customProducts = [
//   {
//     id: 1,
//     name: "Box - Beige",
//     img: Cust1,
//     category: "Technology",
//   },
//   {
//     id: 2,
//     name: "Box - Green",
//     img: Cust2,
//     category: "Technology",
//   },
//   {
//     id: 3,
//     name: "Box - Black",
//     img: Cust3,
//     category: "Mobile",
//   },
// ];


// const promotionalProducts = [
//   {
//     id: 1,
//     name: "Bamboo Coffee Sipper",
//     img: Promo1,
//     category: "Technology",
//   },
//   {
//     id: 2,
//     name: "Champagne Flute",
//     img: Promo2,
//     category: "Mobile",
//   },
//   {
//     id: 3,
//     name: "Copper Bottle Set",
//     img: Promo3,
//     category: "Audio",
//   },
//   {
//     id: 4,
//     name: "Glass Bottle – Tyrel",
//     img: Promo4,
//     category: "Audio",
//   },
//   {
//     id: 5,
//     name: "Sipper – Laba",
//     img: Promo5,
//     category: "Audio",
//   },
//   {
//     id: 6,
//     name: "Passport Organizer",
//     img: Promo6,
//     category: "Audio",
//   },
//   {
//     id: 7,
//     name: "Passport Pouch",
//     img: Promo7,
//     category: "Audio",
//   },
//   {
//     id: 8,
//     name: "Storage pouches – felt",
//     img: Promo8,
//     category: "Audio",
//   },
//   {
//     id: 9,
//     name: "Sunglass pouch",
//     img: Promo9,
//     category: "Audio",
//   },
//   {
//     id: 10,
//     name: "Crochet Coaster – Mia",
//     img: Promo10,
//     category: "Audio",
//   },
//   {
//     id: 11,
//     name: "Deskmate- Multipurpose Pad",
//     img: Promo11,
//     category: "Audio",
//   },
//   {
//     id: 12,
//     name: "Foldable Mouse Pad – ZEN",
//     img: Promo12,
//     category: "Audio",
//   },
//   {
//     id: 13,
//     name: "Seed paper Calendar 2025",
//     img: Promo13,
//     category: "Audio",
//   },
//   {
//     id: 14,
//     name: "Whippy- Foldable Mobile Stand",
//     img: Promo14,
//     category: "Audio",
//   },
//   {
//     id: 15,
//     name: "Blue Arrow- Journal",
//     img: Promo15,
//     category: "Audio",
//   },
//   {
//     id: 16,
//     name: "Journal – Dante",
//     img: Promo16,
//     category: "Audio",
//   },
//   {
//     id: 17,
//     name: "Journal – Newton",
//     img: Promo17,
//     category: "Audio",
//   },
//   {
//     id: 18,
//     name: "Journal – Leer",
//     img: Promo18,
//     category: "Audio",
//   },
//   {
//     id: 19,
//     name: "Journal – Libro Black",
//     img: Promo19,
//     category: "Audio",
//   },
//   {
//     id: 20,
//     name: "Notes organizer",
//     img: Promo20,
//     category: "Audio",
//   },
// ];


// // Reusable Product Grid Component
// const ProductGrid = ({ products, link }) => {
//   return (
//     <Row className="mt-4 justify-content-center">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} link={link} />
//       ))}
//     </Row>
//   );
// };

// // ProductCard with redirect on click
// const ProductCard = ({ product, link }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleClick = () => {
//     window.location.href = "https://crownleaf.co";
//   };

//   return (
//     <Col xs={12} sm={6} md={6} lg={5} xl={4} className="mb-4">
//       <Card
//         className="shadow-sm h-100"
//         style={{ height: "100%", width: "100%", overflow: "hidden", cursor: "pointer" }}
//         onClick={handleClick}
//       >
//         <Card.Img
//           variant="top"
//           src={product.img.src}
//           alt={product.name}
//           style={{
//             objectFit: "cover",
//             height: "300px",
//             width: "100%",
//             transform: isHovered ? "scale(1.05)" : "scale(1)",
//             transition: "transform 0.4s ease",
//             cursor: "pointer",
//           }}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         />

//         <Card.Body style={{ padding: "15px" }}>
//           <Card.Title className="text-center" style={{ fontSize: "1.1rem" }}>
//             {product.name}
//           </Card.Title>

//           <div className="d-flex justify-content-center align-items-center mt-3">
//             <a
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-outline-primary btn-sm"
//               style={{
//                 color: "#003366",
//                 borderColor: "#003366",
//                 borderRadius: "999px",
//                 padding: "6px 20px",
//                 transition: "all 0.3s ease",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = "#003366";
//                 e.target.style.color = "#fff";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = "transparent";
//                 e.target.style.color = "#003366";
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               Enquiry Now
//             </a>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };


// // Custom styles for modern tabs
// const tabStyles = {
//   tabList: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "12px",
//     borderBottom: "none",
//     marginBottom: "25px",
//     padding: 0,
//     listStyle: "none",
//   },
//   tab: {
//     padding: "10px 22px",
//     borderRadius: "999px",
//     border: "1px solid transparent",
//     background: "#f0f0f0",
//     color: "#333",
//     fontWeight: 500,
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     userSelect: "none",
//   },
//   tabSelected: {
//     backgroundColor: "#003366",
//     color: "#fff",
//     borderColor: "#003366",
//     fontWeight: 600,
//   },
// };

// const CorporateGiftingPage = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   useEffect(() => {
//     const handleClickAnywhere = (event) => {
//       // Prevent redirect if click inside tabs or hero section
//       if (
//         event.target.closest(".react-tabs") ||
//         event.target.closest(".hero-section")
//       ) {
//         return;
//       }
//       window.location.href = "https://crownleaf.co";
//     };

//     window.addEventListener("click", handleClickAnywhere);

//     return () => {
//       window.removeEventListener("click", handleClickAnywhere);
//     };
//   }, []);

//   const handleTabSelect = (index) => {
//     setTabIndex(index);
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${topBanner.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "30px 0",
//           minHeight: "400px",
//           position: "relative",
//         }}
//       >
//         <Container fluid>
//           <Row className="align-items-center justify-content-center">
//             <Col md={7} className="text-center mb-4 mb-md-0"></Col>
//             <Col xs={12} md={5} lg={4} className="d-flex justify-content-end">
//               {/* Form or other content can go here */}
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-4">Our Gifting Solutions</h2>
//           <Tabs
//             selectedIndex={tabIndex}
//             onSelect={handleTabSelect}
//             onClick={(e) => e.stopPropagation()} // prevent bubbling clicks on tabs to window listener
//           >
//             <TabList style={tabStyles.tabList}>
//               {[
//                 "Employee Gifting",
//                 "Client Gifting",
//                 "Welcome Kit",
//                 "Custom Packaging",
//                 "Promotional Products",
//                 "Bulk Orders",
//               ].map((tab, idx) => (
//                 <Tab
//                   key={tab}
//                   style={{
//                     ...tabStyles.tab,
//                     ...(tabIndex === idx ? tabStyles.tabSelected : {}),
//                   }}
//                 >
//                   {tab}
//                 </Tab>
//               ))}
//             </TabList>

//             <TabPanel>
//   <p className="text-center">
//     Appreciate your employees with thoughtful gifts tailored to
//     boost morale and loyalty.
//   </p>
//   <ProductGrid
//     products={employeeGiftingProducts}
//     link="https://crownleaf.co/"
//   />
// </TabPanel>

// <TabPanel>
//   <p className="text-center">
//     Enhance client relationships with elegant, branded gifting
//     options that leave a mark.
//   </p>
//   <ProductGrid
//     products={clientGiftingProducts}
//     link="https://crownleaf.co/product-category/client-gifts/"
//   />
// </TabPanel>

// <TabPanel>
//   <p className="text-center">
//     Celebrate occasions with premium hampers packed with festive
//     cheer.
//   </p>
//   <ProductGrid
//     products={welcomeKitProducts}
//     link="https://crownleaf.co/product-category/welcome-kit/"
//   />
// </TabPanel>

// <TabPanel>
//   <p className="text-center">
//     Create lasting impressions with fully customized packaging that
//     tells your brand story.
//   </p>
//   <ProductGrid
//     products={customProducts}
//     link="https://crownleaf.co/"
//   />
// </TabPanel>

// <TabPanel>
//   <p className="text-center">
//     Promote your brand with useful and stylish promotional products.
//   </p>
//   <ProductGrid
//     products={promotionalProducts}
//     link="https://crownleaf.co/"
//   />
// </TabPanel>

//             {/* Bulk Orders Tab */}
//             <TabPanel>
//   <div style={{ textAlign: "center" }}>
//     <a
//       href="https://crownleaf.co/bulk-enquiry/"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         display: "inline-block",
//         backgroundColor: "#003366",        // button background
//         color: "#ffffff",                 // button text color
//         padding: "10px 20px",             // vertical & horizontal padding
//         borderRadius: "20px",              // rounded corners
//         textDecoration: "none",           // remove underline from link
//         fontWeight: "bold",
//         fontSize: "1rem",
//       }}
//     >
//       Bulk Enquiry
//     </a>
//   </div>
// </TabPanel>


//           </Tabs>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default CorporateGiftingPage;
