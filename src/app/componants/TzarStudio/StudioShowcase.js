/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/show4.jpg"
import MobileSlide1 from "@/assets/images/MobileShowcase/show1.jpg"
import MobileSlide2 from "@/assets/images/MobileShowcase/show2.jpg"
import MobileSlide3 from "@/assets/images/MobileShowcase/show3.jpg"
import MobileSlide4 from "@/assets/images/MobileShowcase/show4.jpg"
import MobileSlide5 from "@/assets/images/MobileShowcase/show1-1.jpg"
import MobileSlide6 from "@/assets/images/MobileShowcase/show1-2.jpg"
import MobileSlide7 from "@/assets/images/MobileShowcase/show1-3.jpg"
import clapper from "@/assets/images/MobileShowcase/clapper.gif"
import { Container } from "react-bootstrap";




export default class StudioShowcase extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            autoplay: true,
            slidesToShow: 6,
            arrows: false,
            autoplaySpeed: 1000,
            speed: 500
        };
        return (
            <section className="studioshowcase">
                {/* <Container> */}
                <div className="">
                    <div className="section-title text-center">
                        <div className="reel-position">
                            {/* <img className='my-img-reel' src="/reel.png" alt="reel" width="400" height="400" /> */}
                        </div>
                        <p className="section-title__tagline">Where Every Frame Tells a Story</p>
                        <h2 className="section-title__title">WORK SHOWCASE</h2>
                    </div>

                    <Container> <div className="studiosliderbox">
                        <Slider {...settings} className="ContainerWebContainerstudio">
                            <div className="studioSlidebox" >
                                <img src={MobileSlide.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide1.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide2.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide3.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide4.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide5.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide6.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide7.src} alt="mkstudio" className="mobileSlidemkstudio" />
                            </div>
                            {/* <div className="studioSlidebox" >
                                <img src={MobileSlide8.src} alt="" className="mobileSlidemkstudio" />
                            </div> */}
                            {/* <div className="studioSlidebox" >
                                <img src={MobileSlide9.src} alt="" className="mobileSlidemkstudio" />
                            </div>
                            <div className="studioSlidebox" >
                                <img src={MobileSlide10.src} alt="" className="mobileSlidemkstudio" />
                            </div> */}
                        </Slider>
                    </div>
                    </Container>
                </div>
                {/* </Container> */}
            </section>
        );
    }
}