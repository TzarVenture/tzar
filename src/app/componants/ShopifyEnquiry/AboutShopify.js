"use client";

import { useState } from "react";

export default function AboutShopify() {
    return (
        <>
            <section className="Shopifyabout">
                <div className="container herocontent">
                    <div>
                        <h1 className="title-head">Shopify Website Development @ ₹99,000</h1>
                        <p className="para-title-head">FREE DOMAIN* | FREE PROFESSIONAL EMAILS*</p>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src="https://webzplot.com/wp-content/uploads/2020/11/Hotel-Booking-amico-1-1024x1024.png.webp" width="500" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="about-head-content">MAXIMIZE YOUR ROI WITH A SHOPIFY WEBSITE TAILORED TO YOUR BUSINESS NEEDS</h2>
                            <div>
                                <p className="about-para-content">Creating a Shopify website involves much more than just setting up a template and adding products. Our team of experienced developers and designers will work with you to create a website that reflects your brand and meets your business needs.<br /><br />
                                    Our process includes in-depth research and analysis of your industry, target audience, and competition, to ensure that your website is optimized for conversions and user experience. We will also integrate important features such as payment gateways, shipping options, and much more to streamline your operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}