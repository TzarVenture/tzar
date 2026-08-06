"use client";

import { useState } from "react";
import studioClients from "@/app/data/studioClients";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonial1 from "./ShopifyClient1";

const TinySlider1 = dynamic(() => import("@/app/componants/ShopifyEnquiry/TinySlider1/TinySlider1"), {
    ssr: false,
});

const settings = {
    loop: true,
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 2,
    autoplay: true,
    autoHeight: true,
    controls: false,
    gutter: 5,
    autoplayButton: false,
    autoplayButtonOutput: false,
    responsive: {
        568: {
            items: 2,
            gutter: 5,
        },
        668: {
            items: 3,
            gutter: 30,
        },
        768: {
            items: 3,
            gutter: 30,
        },
        886: {
            items: 5,
            gutter: 30,
        },
        998: {
            items: 4,
            gutter: 30,
        },
        1200: {
            items: 6,
            gutter: 30,
        },

    },
};

const { bg, tagline, title, testimonials } = studioClients;


export default function ClientShopify() {

    const listRef = useRef(null);

    return (
        <>
            <section className="Shopifyabout">
                <div className="container herocontent">
                    <div>
                        <h1 className="title-head">Our Shopify Clients</h1>
                        <p className="title-paraclient">Driving technology for leading brands</p>
                    </div>
                    <div>
                        <Row>
                            <Col xl={12}>
                                <div className="testimonial-three__carousel">
                                    <TinySlider1 options={settings} listRef={listRef}>
                                        {testimonials.map((testimonial) => (
                                            <SingleTestimonial1
                                                key={testimonial.id}
                                                testimonial={testimonial}
                                                listRef={listRef}
                                            />
                                        ))}
                                    </TinySlider1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}