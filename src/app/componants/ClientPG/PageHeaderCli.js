"use client";
import bg4 from "@/assets/images/backgrounds/page-header-bgOurClients.jpg";
import bg41 from "@/assets/images/MobileTopBanners/Our-Clients.gif";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderCli = ({ page = "", title = "", parent = "" }) => {
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
        style={{ backgroundImage: `url(${width > breakpoint ? bg4.src : bg41.src})` }}
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

export default PageHeaderCli;
