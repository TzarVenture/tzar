/* eslint-disable @next/next/no-img-element */
import footerData from "@/app/data/footerData";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const {
  phone,
  phone1,
  phone2,
  mailIcon,
  phoneIcon,
  googlepartner,
  facebook,
  googlereview,
  socials,
  address,
  city,
  email,
  links,
  year,
  author,
} = footerData;

const SiteFooter = () => {
  return (
    <>
     <style>
        {`
          .payment-image {
            width: 500px;
            height: auto;
          }

          @media (max-width: 768px) {
            .payment-image {
            margin-top: 20px;
              width: 300px;
            }
          }
        `}
      </style>
    <footer
      style={{
        background: "#1D4224",
        color: "#0000",
        paddingTop: "70px",
        // fontFamily: "Inter, sans-serif",
        fontFamily: "Federo, sans-serif",
      }}
    >
      {/* ================= MAIN FOOTER ================= */}
      <Container>
        <Row>
          {/* LEFT COLUMN */}
          <Col lg={4} md={12} style={{ marginBottom: "40px" }}>
            <h4 style={{ color: "#D4AF37", marginBottom: "18px" }}>
              TZAR DIGITAL AGENCY
            </h4>

            <p style={{ lineHeight: "1.9", fontSize: "15px", color: "#D4AF37" }}>
              {address}
              <br />
              {city}
            </p>

            {/* SOCIAL ICONS */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "18px",
                marginBottom: "24px",
              }}
            >
              {socials.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D4AF37",
                    fontSize: "16px",
                  }}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>

            <Link
              href="/payment-gateway"
              style={{
                display: "inline-block",
                color: "black",
                fontWeight: 500,
                letterSpacing: "0.5px",
                color: "#D4AF37"
              }}
            >
              MAKE ONLINE PAYMENT
            </Link>
          </Col>

          {/* CENTER COLUMN */}
          <Col lg={4} md={12} style={{ marginBottom: "40px" }}>
            <h4 style={{ color: "#D4AF37", marginBottom: "18px" }}>LINKS</h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap: "12px",
                columnGap: "30px",
                fontSize: "15px",
              }}
            >
              {links.map(({ id, title, href }) => (
                <Link key={id} href={href} style={{ color: "#D4AF37" }}>
                  {title}
                </Link>
              ))}
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={4} md={12}>
            <h4 style={{ color: "#D4AF37", marginBottom: "18px" }}>
              CONTACT US
            </h4>

            {/* EMAIL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              {/* <img src={mailIcon.src} alt="" width="16" /> */}
              <CiMail color="#D4AF30" size={18}/>
              <a href={`mailto:${email}`} style={{ color: "#D4AF37  " }}>
                {email}
              </a>
            </div>

            {/* PHONE NUMBERS — ONE LINE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "25px",
                whiteSpace: "nowrap",
                fontSize: "15px",
              }}
            >
              {/* <img src={phoneIcon.src} alt="" width="16" /> */}
              <CiPhone color="#D4AF37"  size={18}/>
              <a href={`tel:${phone}`} style={{ color: "#D4AF37" }}>
                {phone}
              </a>

              <span style={{ opacity: 0.4 }}>|</span>

              <a href={`tel:${phone1}`} style={{ color: "#D4AF37  " }}>
                {phone1}
              </a>

              <span style={{ opacity: 0.4 }}>|</span>

              <a href={`tel:${phone2}`} style={{ color: "#D4AF37" }}>
                {phone2}
              </a>
            </div>

            {/* PARTNERS */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8">
                <img
                  src={googlereview.src}
                  alt="google-review"
                  height="40"
                />
              </a>
              <img
                src={googlepartner.src}
                alt="google-partner"
                height="45"
              />
              <a href="https://www.facebook.com/TzarAgency">
                <img src={facebook.src} alt="facebook" height="45" />
              </a>
            </div>
          </Col>
        </Row>

        <div style={{display: "flex", justifyContent: "center"}}><img src="./payment-image.webp" className="payment-image"/></div>
      </Container>

      {/* ================= BOTTOM ================= */}
      <div
        style={{
          marginTop: "50px",
          padding: "18px 0 14px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          fontSize: "14px",
          background: "#003108",
        }}
      >
        {/* TRUSTED PAYMENT */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginBottom: "6px",
            fontSize: "12px",
            opacity: 0.75,
            color: "#D4AF37"
            }}
            >
          <span>Trusted Online Payment Partner</span>
          <img
            // src="/images.png"
            src="/razorpay.jpg"
            alt="Razorpay"
            style={{ height: "18px", display: "block" }}
          />
          <span>100% Secure Payment</span>
        </div> */}

        {/* COPYRIGHT */}
        <div style={{ opacity: 0.85, color: "#D4AF37", fontSize: "15px" }}>
          © Copyrights {year} <a href="https://tzar.co" style={{color: "#D4AF37"}}>
            {author}
            </a>
        </div>
      </div>
    </footer>
            </>
  );
};

export default SiteFooter;