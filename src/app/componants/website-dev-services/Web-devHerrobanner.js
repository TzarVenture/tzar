"use client";
import { Container, Col, Row, Image } from 'react-bootstrap'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";
import WebServicesContactForm from '../contact/WebServiceContactForm';

function WebdevHerrobanner() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>; // Or some other placeholder
    }

    if (width > breakpoint) {
        return (
            <>
                <section className="web-herobanner">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-6 col-12'>
                                <div className="hero-seocontent">
                                    <h1>Powerup your online presence <br />Shopify | Wordpress | React Next. Js</h1>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <WebServicesContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <section className="web-herobanner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div className="hero-seocontent">
                                <h1> Power up your online presence with professional web development. <br />SHOPIFY | WORDPRESS | REACT JS | NEXT JS"</h1>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mobile-res-web'>
                <WebServicesContactForm />
            </div>
        </>
    );
}

export default WebdevHerrobanner;
