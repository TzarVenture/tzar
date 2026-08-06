"use client";
/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide1 from "@/assets/images/iconicbrands/p1.png" 
import MobileSlide2 from "@/assets/images/iconicbrands/p2.png" 
import MobileSlide3 from "@/assets/images/iconicbrands/p3.png" 
import MobileSlide4 from "@/assets/images/iconicbrands/p4.png" 
import MobileSlide5 from "@/assets/images/iconicbrands/p5.png" 
import MobileSlide6 from "@/assets/images/iconicbrands/p6.png" 
import MobileSlide7 from "@/assets/images/iconicbrands/p7.png" 
import MobileSlide8 from "@/assets/images/iconicbrands/p8.png" 
import MobileSlide9 from "@/assets/images/iconicbrands/p9.png" 
import MobileSlide10 from "@/assets/images/iconicbrands/p10.png" 


export default class PrimeClientsMock extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      autoplay:true,
      slidesToShow: 3,
      arrows : false,
      autoplaySpeed: 1000,
      speed: 500
    };
    return (
     <div className="ContainerWebprime">
        <Slider {...settings} className="ContainerWebContainerprime">
        <div className= "mobileSlideboxprime" >
            <img src={MobileSlide5.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide1.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide2.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide3.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide4.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide5.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide6.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide7.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide8.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide9.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
          <div className= "mobileSlideboxprime" >
            <img src={MobileSlide10.src} alt=""  className="mobileSlidemkprime"  />  
          </div>
        </Slider>
      </div>
    );
  }
}