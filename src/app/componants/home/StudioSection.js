/* eslint-disable react/no-unescaped-entities */
'use client';
import studiofoodshoot from "@/app/data/studioFoodshoot";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// import { TypeAnimation } from 'react-type-animation';
// import Tilt from "react-tilt";
import Link from "next/link";
import Title from "./Title/Title";
// import dynamic from "next/dynamic";

import Slider from "react-slick";
// import MobileSlide from "@/assets/images/MobileShowcase/sample.png"
// import MobileMock from "@/assets/images/MobileShowcase/sample.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/studioframe1.jpg"
import MobileSlide2 from "@/assets/images/MobileShowcase/studioframe2.jpg"
import MobileSlide3 from "@/assets/images/MobileShowcase/studioframe3.jpg"
import MobileSlide4 from "@/assets/images/MobileShowcase/studioframe4.jpg"
import MobileSlide5 from "@/assets/images/MobileShowcase/studioframe5.jpg"
import MobileSlide6 from "@/assets/images/MobileShowcase/studioframe6.jpg"
import MobileSlide7 from "@/assets/images/MobileShowcase/studioframe7.jpg"
import MobileSlide8 from "@/assets/images/MobileShowcase/studioframe8.jpg"
import MobileSlide9 from "@/assets/images/MobileShowcase/studioframe9.jpg"
// import { Link } from "react-scroll";

const { images, imagesflim, imagesreel, badge, hometagline, hometitle, title, text1, text2, text4, bg, testimonials } = studiofoodshoot;

const StudioSection = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 500
    };

    return (
        <section className="GraphicDesigning-pagestudio studio-sectionmain">
            <div
                className="counter-one-pattern-studio"
                style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            {/* <Container> */}
            <Row>
                <Col xl={6}>
                    <div className="GraphicDesigning__left">
                        <div className="GraphicDesigning__img">
                            <div className="homereel-position">
                                <Image
                                    src={require(`@/assets/images/resources/${imagesreel}`).default.src}
                                    alt="flim"
                                    // width="400" height="400"
                                    className="my-img-reel" />
                            </div>
                            <Slider {...settings} className="ContainerReelContainer">
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide9.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide1.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide2.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide3.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide4.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide5.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide6.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide7.src} alt="" className="reelSlidehome" />
                                </div>
                                <div className="reelSlidebox">
                                    <Image src={MobileSlide8.src} alt="" className="reelSlidehome" />
                                </div>
                            </Slider>
                            <Image
                                src={require(`@/assets/images/resources/${imagesflim}`).default.src}
                                alt="flim"
                                className="flim-banner" />
                        </div>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className="GraphicDesigning__studio home-sectiondesing">
                        <Title title={hometitle} tagline={hometagline} className="text-center" />
                        <div className="studio-servicehome">
                            <p>{text4}</p>
                        </div>

                        <Link href="/tzar-studio" className="BtnStudio GraphicDesigning__studiobtn">
                            Enquire Now
                        </Link>
                    </div>
                </Col>
            </Row>
            {/* </Container> */}
        </section>
    );
};

export default StudioSection;
