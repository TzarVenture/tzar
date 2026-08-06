"use client";

import React, { useState } from "react";
import faqPage from "@/app/data/plandata";
import { Col, Container, Row } from "react-bootstrap";

const { bg, faqs, bottomText } = faqPage;

export default function EcomPlanShopify() {
    const [faqActive1, setFaqsActive1] = useState(null);
    const [faqActive2, setFaqsActive2] = useState(null);
    const [faqActive3, setFaqsActive3] = useState(null);

    const handleToggle1 = (id) => {
        setFaqsActive1((prevActive) => (prevActive === id ? null : id));
    };

    const handleToggle2 = (id) => {
        setFaqsActive2((prevActive) => (prevActive === id ? null : id));
    };

    const handleToggle3 = (id) => {
        setFaqsActive3((prevActive) => (prevActive === id ? null : id));
    };

    return (
        <>
            <section className="ShopifyPlan">
                <div className="container-fluid">
                    <div>
                        <h1 className="title-head">Choose Your Perfect Plan: Shopify Web Development by Tzar</h1>
                    </div>
                    <br />
                    <div className="row">
                        {/* Card 1 */}
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="plan-card">
                                <h3 className="plan-card-heading">Shopify Website (only) Package</h3>
                                <p className="plan-card-para">E-Commerce Website</p>
                                <h2 className="plan-card-price"> ₹99,000</h2>
                                <ul>
                                    <li><span className="S1PPyQ">Shopify Website Creation and Setup</span></li>
                                    <li><span className="S1PPyQ">Upto 200 Products Upload By Our Team</span></li>
                                    <li><span className="S1PPyQ">SEO Ready Website</span></li>
                                    <li><span className="S1PPyQ">SSL Certificate</span></li>
                                    <li><span className="S1PPyQ">Responsive Website</span></li>
                                    <li><span className="S1PPyQ">Content 2000 Words</span></li>
                                    <li><span className="S1PPyQ">Social Media Integration</span></li>
                                    <li><span className="S1PPyQ">Google Analytics Integration</span></li>
                                </ul>
                                <Row>
                                    <div className="accrodion-grp-faq-one-accrodion dropdowncardtext">
                                        {faqs.map(({ id, title, text }) => (
                                            <div
                                                key={`card1-${id}`}
                                                className={`accrodion overflow-hidden${faqActive1 === id ? " active" : ""}`}
                                            >
                                                <div onClick={() => handleToggle1(id)} className="accrodion-title">
                                                    <h4 className="droptitle">View More Inclusions</h4>
                                                </div>
                                                <div
                                                    className={`accrodion-content animated ${faqActive1 === id ? "slideInUp d-block" : "slideInDown d-none"}`}
                                                >
                                                    <div className="inner">
                                                        <ul>
                                                            <li><span className="S1PPyQ">Google Maps Embed</span></li>
                                                            <li><span className="S1PPyQ">Whatsapp Integration</span></li>
                                                            <li><span className="S1PPyQ">High Speed Optimization</span></li>
                                                            <li><span className="S1PPyQ">Search Console Integration</span></li>
                                                            <li><span className="S1PPyQ">Contact Form Integration</span></li>
                                                            <li><span className="S1PPyQ">Custom Favicon</span></li>
                                                            <li><span className="S1PPyQ">Website Policies Drafting</span></li>
                                                            <li><span className="S1PPyQ">Shopify Portal Training Session</span></li>
                                                            <li><span className="S1PPyQ">Payment Gateway Integration</span></li>
                                                            <li><span className="S1PPyQ">Shipping Gateway Setup & Integration</span></li>
                                                            <li><span className="S1PPyQ">Assistance In Shopify Apps Setup</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Row>
                                <hr />
                                <h5 className="contact-card">TALK TO US<br />+91-9972-318-316</h5>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="plan-card">
                                <h3 className="plan-card-heading">Shopify Website + Android App Package</h3>
                                <p className="plan-card-para">Advanced E-Commerce Website + Android App</p>
                                <h2 className="plan-card-price">₹139,000</h2>
                                <ul>
                                    <li><span className="S1PPyQ">Shopify Website Creation and Setup</span></li>
                                    <li><strong><span className="S1PPyQ">Android Hybrid App</span></strong></li>
                                    <li><strong><span className="S1PPyQ">Google Play Publishing</span></strong></li>
                                    <li><strong><span className="S1PPyQ">Referral Integration</span></strong></li>
                                    <li><strong><span className="S1PPyQ">Abandoned Checkout</span></strong></li>
                                    <li><span className="S1PPyQ">Upto 200 Products Upload By Our Team</span></li>
                                    <li><span className="S1PPyQ">SEO Ready Website</span></li>
                                    <li><span className="S1PPyQ">SSL Certificate</span></li>
                                </ul>
                                <Row>
                                    <div className="accrodion-grp-faq-one-accrodion dropdowncardtext">
                                        {faqs.map(({ id, title, text }) => (
                                            <div
                                                key={`card2-${id}`}
                                                className={`accrodion overflow-hidden${faqActive2 === id ? " active" : ""}`}
                                            >
                                                <div onClick={() => handleToggle2(id)} className="accrodion-title">
                                                    <h4 className="droptitle">View More Inclusions</h4>
                                                </div>
                                                <div
                                                    className={`accrodion-content animated ${faqActive2 === id ? "slideInUp d-block" : "slideInDown d-none"}`}
                                                >
                                                    <div className="inner">
                                                        <ul>
                                                            <li><span className="S1PPyQ">Responsive Website</span></li>
                                                            <li><strong><span className="S1PPyQ">Content 3000 Words</span></strong></li>
                                                            <li><span className="S1PPyQ">Social Media Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Analytics Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Maps Embed</span></li>
                                                            <li><span className="S1PPyQ">Whatsapp Integration</span></li>
                                                            <li><span className="S1PPyQ">High Speed Optimization</span></li>
                                                            <li><span className="S1PPyQ">Search Console Integration</span></li>
                                                            <li><span className="S1PPyQ">Contact Form Integration</span></li>
                                                            <li><span className="S1PPyQ">Custom Favicon</span></li>
                                                            <li><span className="S1PPyQ">Website Policies Drafting</span></li>
                                                            <li><span className="S1PPyQ">Shopify Portal Training Session</span></li>
                                                            <li><span className="S1PPyQ">Payment Gateway Integration</span></li>
                                                            <li><strong><span className="S1PPyQ">Conversion Tracking &amp; Pixel Integration</span></strong></li>
                                                            <li><span className="S1PPyQ">Shipping Gateway Setup &amp; Integration</span></li>
                                                            <li><span className="S1PPyQ">Assistance In Shopify Apps Setup</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Row>
                                <hr />
                                <h5 className="contact-card">TALK TO US<br />+91-9972-318-316</h5>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="plan-card">
                                <h3 className="plan-card-heading">Shopify Website + Android & iOS App Package</h3>
                                <p className="plan-card-para">Advanced E-Commerce Website + Android App + iOS Hybrid App</p>
                                <h2 className="plan-card-price">₹149,000</h2>
                                <ul>
                                    <li><span className="S1PPyQ">Shopify Website Creation and Setup</span></li>
                                    <li><span className="S1PPyQ">Android Hybrid App</span></li>
                                    <li><span className="S1PPyQ">Google Play Publishing</span></li>
                                    <li><strong><span className="S1PPyQ">iOS Web App</span></strong></li>
                                    <li><span className="S1PPyQ">Referral Integration</span></li>
                                    <li><span className="S1PPyQ">Abandoned Checkout</span></li>
                                    <li><span className="S1PPyQ">Upto 200 Products Upload By Our Team</span></li>
                                    <li><span className="S1PPyQ">SEO Ready Website</span></li>
                                </ul>
                                <Row>
                                    <div className="accrodion-grp-faq-one-accrodion dropdowncardtext">
                                        {faqs.map(({ id, title, text }) => (
                                            <div
                                                key={`card3-${id}`}
                                                className={`accrodion overflow-hidden${faqActive3 === id ? " active" : ""}`}
                                            >
                                                <div onClick={() => handleToggle3(id)} className="accrodion-title">
                                                    <h4 className="droptitle">View More Inclusions</h4>
                                                </div>
                                                <div
                                                    className={`accrodion-content animated ${faqActive3 === id ? "slideInUp d-block" : "slideInDown d-none"}`}
                                                >
                                                    <div className="inner">
                                                        <ul>
                                                            <li><span className="S1PPyQ">SSL Certificate</span></li>
                                                            <li><span className="S1PPyQ">Responsive Website</span></li>
                                                            <li><span className="S1PPyQ">Content 3000 Words</span></li>
                                                            <li><span className="S1PPyQ">Social Media Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Analytics Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Maps Embed</span></li>
                                                            <li><span className="S1PPyQ">Whatsapp Integration</span></li>
                                                            <li><span className="S1PPyQ">High Speed Optimization</span></li>
                                                            <li><span className="S1PPyQ">Search Console Integration</span></li>
                                                            <li><span className="S1PPyQ">Contact Form Integration</span></li>
                                                            <li><span className="S1PPyQ">Custom Favicon</span></li>
                                                            <li><span className="S1PPyQ">Website Policies Drafting</span></li>
                                                            <li><span className="S1PPyQ">Shopify Portal Training Session</span></li>
                                                            <li><span className="S1PPyQ">Payment Gateway Integration</span></li>
                                                            <li><span className="S1PPyQ">Conversion Tracking &amp; Pixel Integration</span></li>
                                                            <li><span className="S1PPyQ">Shipping Gateway Setup &amp; Integration</span></li>
                                                            <li><span className="S1PPyQ">Assistance In Shopify Apps Setup</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Row>
                                <hr />
                                <h5 className="contact-card">TALK TO US<br />+91-9972-318-316</h5>
                            </div>
                        </div>

                           {/* Card 4 */}
                           <div className="col-lg-3 col-md-3 col-12">
                            <div className="plan-card">
                                <h3 className="plan-card-heading">Shopify Website + Android & iOS App Package</h3>
                                <p className="plan-card-para">Advanced E-Commerce Website + Android App + iOS Hybrid App</p>
                                <h2 className="plan-card-price">₹149,000</h2>
                                <ul>
                                    <li><span className="S1PPyQ">Shopify Website Creation and Setup</span></li>
                                    <li><span className="S1PPyQ">Android Hybrid App</span></li>
                                    <li><span className="S1PPyQ">Google Play Publishing</span></li>
                                    <li><strong><span className="S1PPyQ">iOS Web App</span></strong></li>
                                    <li><span className="S1PPyQ">Referral Integration</span></li>
                                    <li><span className="S1PPyQ">Abandoned Checkout</span></li>
                                    <li><span className="S1PPyQ">Upto 200 Products Upload By Our Team</span></li>
                                    <li><span className="S1PPyQ">SEO Ready Website</span></li>
                                </ul>
                                <Row>
                                    <div className="accrodion-grp-faq-one-accrodion dropdowncardtext">
                                        {faqs.map(({ id, title, text }) => (
                                            <div
                                                key={`card3-${id}`}
                                                className={`accrodion overflow-hidden${faqActive3 === id ? " active" : ""}`}
                                            >
                                                <div onClick={() => handleToggle3(id)} className="accrodion-title">
                                                    <h4 className="droptitle">View More Inclusions</h4>
                                                </div>
                                                <div
                                                    className={`accrodion-content animated ${faqActive3 === id ? "slideInUp d-block" : "slideInDown d-none"}`}
                                                >
                                                    <div className="inner">
                                                        <ul>
                                                            <li><span className="S1PPyQ">SSL Certificate</span></li>
                                                            <li><span className="S1PPyQ">Responsive Website</span></li>
                                                            <li><span className="S1PPyQ">Content 3000 Words</span></li>
                                                            <li><span className="S1PPyQ">Social Media Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Analytics Integration</span></li>
                                                            <li><span className="S1PPyQ">Google Maps Embed</span></li>
                                                            <li><span className="S1PPyQ">Whatsapp Integration</span></li>
                                                            <li><span className="S1PPyQ">High Speed Optimization</span></li>
                                                            <li><span className="S1PPyQ">Search Console Integration</span></li>
                                                            <li><span className="S1PPyQ">Contact Form Integration</span></li>
                                                            <li><span className="S1PPyQ">Custom Favicon</span></li>
                                                            <li><span className="S1PPyQ">Website Policies Drafting</span></li>
                                                            <li><span className="S1PPyQ">Shopify Portal Training Session</span></li>
                                                            <li><span className="S1PPyQ">Payment Gateway Integration</span></li>
                                                            <li><span className="S1PPyQ">Conversion Tracking &amp; Pixel Integration</span></li>
                                                            <li><span className="S1PPyQ">Shipping Gateway Setup &amp; Integration</span></li>
                                                            <li><span className="S1PPyQ">Assistance In Shopify Apps Setup</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Row>
                                <hr />
                                <h5 className="contact-card">TALK TO US<br />+91-9972-318-316</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
