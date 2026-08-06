"use client";
import faqPage from "@/app/data/faqPage";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "./Faq";
// import { Accordion, AccordionItem } from "@nextui-org/react";
const { bg, faqs, bottomText } = faqPage;


export default function FaqShopify() {
    // const defaultContent =
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <section className="Shopifyfaq">
                <div className="container herocontent">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div>
                                <p className="faq-mini-head">SHOPIFY AGENCY</p>
                                <h2 className="faq-title-head">Get Your Shopify Site in Shape with WebzPlot: Our Expertise, Your Success. Let's Flex our E-Commerce Muscles!</h2>
                                <p className="faq-para-head">WebzPlot is your go-to partner for creating a successful Shopify site. We specialize in providing expert solutions for businesses of all sizes, ensuring that your e-commerce store is designed, developed, and launched with the utmost care and attention. Our team of experienced professionals works closely with you to understand your needs and goals, delivering a Shopify store that’s tailored to your specific business needs. From user-friendly design to optimized functionality, our Shopify experts will ensure that your online store is ready to take on the competition. With WebzPlot, you can rest assured that your e-commerce site is in safe hands, ready to flex its muscles and achieve success.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div>
                                <div className="faq-page__top">
                                    <Row>
                                        {faqs.map((singleFaqs, i) => (
                                            <Col xl={12} lg={12} key={i}>
                                                <div className="faq-page__single">
                                                    <Faq faqs={singleFaqs} />
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}