"use client";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';
import Link from "next/link";

import icon1 from "@/assets/images/icons/beauty.png";
import icon2 from "@/assets/images/icons/fashion.png";
import icon3 from "@/assets/images/icons/furniture.png";
import icon4 from "@/assets/images/icons/food.png";
import icon5 from "@/assets/images/icons/mobile.png";
import icon6 from "@/assets/images/icons/health.png";
import icon7 from "@/assets/images/icons/jewellery.png";
import icon8 from "@/assets/images/icons/baby-care.png";
import icon9 from "@/assets/images/icons/stationery.png";

function OurIndustryExpertise() {
    return (
        <>
            <section className="website-show">
                <div className="container-fluid">
                    <h1 className="section-title__title">Our Industry Expertise</h1>
                    <p className="section-title__web">We excel in developing online stores tailored to a wide range of industries. Our expertise ensures<br /> customized solutions that drive success across diverse business sectors.</p>

                    <ul className="webdev-card-Expert">
                        <li className="CardWDnew-Expert">
                            <Image src={icon1.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Beauty and Cosmetics</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon2.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Fashion and Lifestyle</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon3.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Furniture and Home Décor</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon4.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Food and Beverages</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon5.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Mobile and Electronics</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon6.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Health and Wellness</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon7.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Jewellery and Diamonds</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon8.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Baby Care and Kids Toys</h5>
                        </li>
                        <li className="CardWDnew-Expert">
                            <Image src={icon9.src} className="wdiconsnew-exp" />
                            <h5 className="WDGoals__text">Books and Stationery</h5>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default OurIndustryExpertise;
