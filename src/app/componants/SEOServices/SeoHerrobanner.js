"use client";
import { Container, Col, Row, Image } from 'react-bootstrap'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContactForm from '../contact/ContactForm';
import bg1 from "@/assets/images/backgrounds/seo-banner1.gif";
import { useWindowSize } from "@react-hook/window-size/throttled";

function SeoHerrobanner() {
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
        <>
            <section className="Seo-herobanner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div className="hero-seocontent">
                                <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  marginTop: '20px'
}}>
  <ul style={{
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '14px',
    color: '#fff'
  }}>
    <li style={{ marginRight: '5px' }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
        <i className="fa fa-home" aria-hidden="true"></i> /
      </Link>
    </li>
    <li style={{ marginRight: '5px' }}>
      <Link href="/search-engine-optimization-services" style={{ color: '#fff', textDecoration: 'none' }}>
        SEO /
      </Link>
    </li>
  </ul>
  <h3 style={{
    fontSize: '16px',
    color: '#fff',
    fontWeight: 600,
    margin: 0
  }}>
    100% Guaranteed Result
  </h3>
</div>

                                <h1> Drive Increased Visibility and Traffic with Our Dynamic SEO Techniques.</h1>
                                <Link href="#" className='thm-btn'>Enquiry Now</Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeoHerrobanner;
