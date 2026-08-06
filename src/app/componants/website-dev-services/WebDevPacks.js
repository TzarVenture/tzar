"use client";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';
import Link from "next/link";
import webpacksdata from "@/app/data/webpacksdata";
import wordpressimg from "@/assets/images/icons/wordpress.png";
import shopifyimg from "@/assets/images/icons/shopify2.png";
import nextjsimg from "@/assets/images/icons/nextjs2.png";
import WebPackfeatured from "./WebPackfeatured";

const { title1, title2, title3, wordpress, shopify, nextjs, contact } = webpacksdata;


function WebDevPacks() {
    return (
        <>
            <section className="website-show">
                <div className="container">
                    <h1 className="section-title__title_web">Premium <b>Website Design and Development</b> <br /> Pricing for <b>Businesses</b>  of all Sizes</h1>
                    <p className="section-title__web">  <i className="far fa-edit"></i> No contracts. | <i className="fas fa-award"></i>  100% money-back guarantee on all plans. | <i className="fas fa-clock"></i> 100% Expert Support 24/7</p>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="web-card">
                                <Image src={wordpressimg.src} alt="WordPress" width="150" />
                                <h3 className="web-titleshow">{title1}</h3>
                                <p><b>1 - 2 weeks / Starting Package</b></p>
                                <div className="web-Price">
                                    <h2> 29,999/- INR  + GST </h2>
                                </div>
                                <div className='list-div-web'>
                                    <ul className="icon-list-items">
                                        {wordpress.map((service) => (
                                            <WebPackfeatured key={service.id} service={service} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="web-btnEnquiry">
                                    <Link className="web-enquiry-btn" href="#Contactform">Enquiry Now</Link>
                                    <Link className="web-enquiry-btn2" href={contact}>Call Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="web-card">
                                <Image src={shopifyimg.src} alt="Shopify" width="150" />
                                <h3 className="web-titleshow">{title2}</h3>
                                <p> <b>3 - 4 weeks / Starting Package</b></p>
                                <div className="web-Price">
                                    <h2> 49,999/- INR  + GST</h2>
                                </div>
                                <div className='list-div-web'>
                                    <ul className="icon-list-items">
                                        {shopify.map((service) => (
                                            <WebPackfeatured key={service.id} service={service} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="web-btnEnquiry">
                                    <Link className="web-enquiry-btn" href="#Contactform">Enquiry Now</Link>
                                    <Link className="web-enquiry-btn2" href={contact}>Call Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="web-card">
                                <Image src={nextjsimg.src} alt="Nextjs" width="150" />
                                <h3 className="web-titleshow" > {title3}</h3>
                                <p><b>8 - 12 weeks / Starting Package</b></p>
                                <div className="web-Price">
                                    <h2> 79,999/- INR  + GST</h2>

                                </div>
                                <div className='list-div-web'>
                                    <ul className="icon-list-items">
                                        {nextjs.map((service) => (
                                            <WebPackfeatured key={service.id} service={service} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="web-btnEnquiry">
                                    <Link className="web-enquiry-btn" href="#Contactform">Enquiry Now</Link>
                                    <Link className="web-enquiry-btn2" href={contact}>Call Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WebDevPacks;
