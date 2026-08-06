'use client';
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebDevTab from "./WebDevTab";

const WebPricing = () => {
    return (
        <section className="faq-webdev">
                <h1 className="section-title__title">Website Design & Development Pricing</h1>
                <span className="section-title__tagline">Premium Websites at an affordable price.</span>
                <br />
                <WebDevTab />
        </section>
    );
};

export default WebPricing;
