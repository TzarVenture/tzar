"use client";
import bg15 from "@/assets/images/backgrounds/page-header-bgSocial-Media-marketing.jpg";
import bg151 from "@/assets/images/MobileTopBanners/SMM.jpg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderSmm = ({ page = "", title = "", parent = "" }) => {
  const [width] = useWindowSize({ fps: 60 });
  const breakpoint = 683;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="page-header" style={{ position: "relative" }}>
      <div
        className={width > breakpoint ? "page-header-bgAu" : "page-header-bgWd"}
        style={{ backgroundImage: `url(${width > breakpoint ? bg15.src : bg151.src})` }}
      ></div>
      <Container>
        <div
          className="page-header__innerAuW"
          style={{ position: "absolute", bottom: "20px", left: "20px" }}
        >
          <h2>{title || page}</h2>
          <ul className="thm-breadcrumb list-unstyledAuW" style={{ marginTop: "15px" }}>
            <li>
              <Link href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>/
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PageHeaderSmm;
