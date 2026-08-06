"use client";
import bg11 from "@/assets/images/backgrounds/page-header-bgSEO.jpg";
import bg111 from "@/assets/images/MobileTopBanners/SEO.gif";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderSeo = ({ page = "", title = "", parent = "" }) => {
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
    <section className="page-header">
      <div
        className={width > breakpoint ? "page-header-bgAu" : "page-header-bgWd"}
        style={{ backgroundImage: `url(${width > breakpoint ? bg11.src : bg111.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAuW">
          <h2>{title || page}</h2>
          <ul className="thm-breadcrumb list-unstyledAuW" style={{marginTop: "15px"}}>
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

export default PageHeaderSeo;
