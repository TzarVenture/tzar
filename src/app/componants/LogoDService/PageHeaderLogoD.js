"use client";
import bg55 from "@/assets/images/backgrounds/page-header-bgLogo-Design.jpg";
import bg51 from "@/assets/images/MobileTopBanners/Logo-Design.jpg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderLogoD = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
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
        style={{ backgroundImage: `url(${width > breakpoint ? bg55.src : bg51.src})` }}
      ></div>
      <Container>
        <div
          className="page-header__innerAuW"
          style={{ position: "absolute", bottom: "20px", left: "20px" }} // bottom-left with margin
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
export default PageHeaderLogoD;
