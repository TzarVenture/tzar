/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/food15.jpg"
import MobileSlide1 from "@/assets/images/MobileShowcase/food11.jpg"
import MobileSlide2 from "@/assets/images/MobileShowcase/food2.jpg"
import MobileSlide3 from "@/assets/images/MobileShowcase/food13.jpg"
import MobileSlide4 from "@/assets/images/MobileShowcase/food1.jpg"
import MobileSlide5 from "@/assets/images/MobileShowcase/food12.jpg"
import MobileSlide6 from "@/assets/images/MobileShowcase/food3.jpg"
import MobileSlide7 from "@/assets/images/MobileShowcase/food14.jpg"
// import MobileSlide8 from "@/images/MobileShowcase/food15.jpg"
// import MobileSlide9 from "@/images/MobileShowcase/Showcase-16.png"
// import MobileSlide10 from "@/images/MobileShowcase/Showcase-17.png"
import { Container } from "react-bootstrap";




export default class StudioFoodSlide extends Component {
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

            <Container> <div className="studiosliderbox">
                <Slider {...settings} className="ContainerWebContainerstudio">
                    <div className="studioSlidebox" >
                        <img src={MobileSlide.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide1.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide2.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide3.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide4.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide5.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide6.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                     <div className="studioSlidebox" >
                        <img src={MobileSlide7.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                   {/* <div className="studioSlidebox" >
                        <img src={MobileSlide8.src} alt="foodshoot" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide9.src} alt="" className="mobileSlidemkstudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide10.src} alt="" className="mobileSlidemkstudio" />
                    </div> */}
                </Slider>
            </div>
            </Container>

        );
    }
}