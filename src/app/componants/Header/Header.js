"use client";
import header from "@/app/data/header";
import Link from "next/link";
import { Image } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaPhoneAlt } from "react-icons/fa";

const { logo1, logo2, phone, phone1, phoneIcon, navItems } = header;

const NavItem = ({ navItem = {}, isMobile = false }) => {
  const { name, href, subNavItems = [] } = navItem;
  const [open, setOpen] = useState(false);

  return (
    <li
      style={{
        position: "relative",
        listStyle: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <Link
        href={href}
        onClick={(e) =>
          isMobile &&
          subNavItems.length > 0 &&
          (e.preventDefault(), setOpen(!open))
        }
        style={{
          padding: "8px 12px",
          textDecoration: "none",
          color: "#D4AF37",
          fontWeight: "500",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </Link>

      {subNavItems.length > 0 && (
        <ul
          style={{
            display: open ? "block" : "none",
            position: isMobile ? "relative" : "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            minWidth: "180px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            padding: "8px 0",
            zIndex: 9999,
          }}
        >
          {subNavItems.map((subItem) => (
            <li key={subItem.id} style={{ listStyle: "none" }}>
              <Link
                href={subItem.href}
                style={{
                  display: "block",
                  padding: "10px 18px",
                  color: "#003108",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = ({ pageTitle }) => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [headerHeight, setHeaderHeight] = useState(0);

  const isMobile = windowWidth <= 1100;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", updateHeaderHeight);
    updateHeaderHeight();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", updateHeaderHeight);
    };
  }, []);

  const customStyles = {
    overlay: { backgroundColor: "transparent", zIndex: 9999 },
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 0,
      padding: 0,
      background: "transparent",
    },
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-track">
          <div className="topbar-text">
            25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
          </div>
          <div className="topbar-text">Trusted by 1500+ Businesses Across India</div>
          <div className="topbar-text">Fast Delivery • Premium Quality • Best Pricing</div>
          <div className="topbar-text">Serving now in Hyderabad and Mumbai</div>

          <div className="topbar-text">
            25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
          </div>
          <div className="topbar-text">Trusted by 1500+ Businesses Across India</div>
          <div className="topbar-text">Fast Delivery • Premium Quality • Best Pricing</div>
          <div className="topbar-text">Serving now in Hyderabad and Mumbai</div>
        </div>
      </div>

      <div style={{ paddingTop: headerHeight + 40 }} />

      {/* HEADER */}
      <header
        ref={headerRef}
        style={{
          width: "100%",
          background: "#1d4224",
          position: "fixed",
          top: 40,
          left: 0,
          zIndex: 1000,
          fontFamily: "'Federo', sans-serif",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 30px",
            width: "100%",
            flexWrap: "nowrap",
          }}
        >
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Link href="/">
              <Image
                // src={pageTitle === "Home Two" ? logo2.src : logo1.src}
                src="./tzar.adce704f.png"
                alt="Logo"
                width="250"
                // style={{background: "#003108"}}
              />
            </Link>
          </div>

          {/* MENU */}
          <ul
            style={{
              display: isMobile ? "none" : "flex",
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "22px",
              alignItems: "center",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            {navItems.map((item) => (
              <NavItem key={item.id} navItem={item} />
            ))}

            {/* Hire Us */}
            <li style={{ display: "flex", alignItems: "center" }}>
              <Link
                href="/hire-us"
                style={{
                  padding: "8px 20px",
                  color: "#D4AF37",
                  // background: "#fff",
                  border: "1px solid #D4AF37",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Hire Us
              </Link>
            </li>

            {/* Payment */}
          <li style={{ display: "flex", alignItems: "center", marginLeft: "-15px" }}>
              <Link
                href="/payment"
                style={{
                  padding: "8px 20px",
                  color: "#1D4224",
                  background: "#D4AF37",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Payment
              </Link>
            </li>
          </ul>

          {/* CALL ANYTIME */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              alignItems: "center",
              gap: 10,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {/* <Image src={phoneIcon.src} alt="" width="32" height="32" /> */}

<FaPhoneAlt size={32} color="#D4AF37"/>
            {/* <div style={{ lineHeight: "1.2" }}>
              <p style={{ margin: 0, color: "#003108", fontSize: "12px" }}>
                Call Anytime
              </p>
              <h5 style={{ margin: 0, fontSize: "14px", color: "#003108" }}>
                + {phone} &nbsp; + {phone1}
              </h5>
            </div> */}
            <div>
               {/* <p style={{ margin: 0, color: "#003108", fontSize: "12px" }}>
                Call Anytime
              </p> */}
              <p style={{margin: "0px", color: "#D4AF37"}}>+ 91 730-405-6607</p>
              <p style={{margin: "0px", color: "#D4AF37"}}>+ 91 900-425-0252</p>
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <span onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
              <i className="fa fa-bars" style={{ fontSize: "26px", color: "#fff" }}></i>
            </span>
          )}

          {/* MOBILE MENU MODAL */}
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
          >
            <div style={{ background: "#0e2920", padding: 20 }}>
              <span
                onClick={() => setIsOpen(false)}
                style={{ cursor: "pointer", fontSize: "24px", color: "#fff" }}
              >
                <i className="fa fa-times"></i>
              </span>
              <MobileMenu />
            </div>
          </Modal>
        </nav>
      </header>
    </>
  );
};

export default Header;
