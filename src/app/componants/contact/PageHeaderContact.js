"use client";
import bg2 from "@/assets/images/backgrounds/page-header-bgCu.jpg";
import bg31 from "@/assets/images/MobileTopBanners/Contact-us.gif" ;
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderContact = ({ page = "", title = "", parent = "" }) => {
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
        style={{ backgroundImage: `url(${width > breakpoint ? bg2.src : bg31.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAuW">
          <h2>{title || page}</h2>
          <ul className="thm-breadcrumb list-unstyledAuW">
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

export default PageHeaderContact;
