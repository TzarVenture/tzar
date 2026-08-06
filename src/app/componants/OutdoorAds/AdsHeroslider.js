/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide1 from "@/assets/images/resources/Ads-service/s1.png" 
import MobileSlide2 from "@/assets/images/resources/Ads-service/s2.png" 
// import MobileSlide3 from "@/images/iconic brands/p3.png" 
// import MobileSlide4 from "@/images/iconic brands/p4.png" 
// import MobileSlide5 from "@/images/iconic brands/p5.png" 
// import MobileSlide6 from "@/images/iconic brands/p6.png" 
// import MobileSlide7 from "@/images/iconic brands/p7.png" 
// import MobileSlide8 from "@/images/iconic brands/p8.png" 
// import MobileSlide9 from "@/images/iconic brands/p9.png" 
// import MobileSlide10 from "@/images/iconic brands/p10.png" 


export default class AdsHeroslider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      autoplay:true,
      slidesToShow: 1,
      arrows : false,
      autoplaySpeed: 2000,
      speed: 500
    };
    return (
     <div className="Containeradsslide">
        <Slider {...settings} className="ContainerWebContainerprime">
        {/* <div className= "mobileSlideboxprime" >
            <img src={MobileSlide5.src} alt=""  className="mobileSlidemkprime"  />  
          </div> */}
          <div className= "mobileSlideboxprimess" >
            <img src={MobileSlide1.src} alt="heroimg" className="herroaddsliderimg"  />  
          </div>
           <div className= "mobileSlideboxprimess" >
            <img src={MobileSlide2.src} alt="heroimg" className="herroaddsliderimg"  />  
          </div>
         {/* <div className= "mobileSlideboxprime" >
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
          </div> */}
        </Slider>
      </div>
    );
  }
}