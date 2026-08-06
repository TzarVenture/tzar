/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/Home/Showcase-06.png"
import MobileMock from "@/assets/images/MobileShowcase/Home/Showcase-12.png"
import MobileMockmob from "@/assets/images/MobileShowcase/Home/Showcase-12mob.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/Home/Showcase-07.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/Home/Showcase-08.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/Home/Showcase-09.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/Home/Showcase-10.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/Home/Showcase-11.png"
import MobileSlide6 from "@/assets/images/MobileShowcase/Home/Showcase-13.png"
import MobileSlide7 from "@/assets/images/MobileShowcase/Home/Showcase-14.png"
import MobileSlide8 from "@/assets/images/MobileShowcase/Home/Showcase-01.png"
import MobileSlide9 from "@/assets/images/MobileShowcase/Home/Showcase-02.png"
import MobileSlide10 from "@/assets/images/MobileShowcase/Home/Showcase-03.png"
import MobileSlide11 from "@/assets/images/MobileShowcase/Home/Showcase-04.png"
import MobileSlide12 from "@/assets/images/MobileShowcase/Home/Showcase-05.png"
import MobileSlide13 from "@/assets/images/MobileShowcase/Home/Showcase-18.png"

export default class WebDesignMock extends Component {
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
      <>
        {/* Inline responsive fix for iPads */}
       <style>{`
  /* Center heading and paragraph on all devices */
  .section-titlemk p,
  .section-titlemk h2 {
    margin: 0 auto !important;
    text-align: center !important;
    display: block;
  }

  /* Optional: Shift entire section upwards for tablets if needed */
  @media (max-width: 1366px) and (min-width: 768px) {
    .ContainerWeb {
      margin-top: 50px; /* adjust value as needed */
    }
  }

  @media (max-width: 768px) and (min-width: 600px) {
    .ContainerWeb {
      margin-top: -60px; /* fine-tune for small tablets */
    }
  }
`}</style>
        <section className="ContainerWeb" style={{background: "#1D4224"}}>
          <div className="section-titlemk text-center">
            <p className="section-title__taglinemk" style={{color: "#D4AF37"}}>Website Design & Development</p>
            <h2 className="section-title__titlemk" style={{color: "#D4AF37"}}>
              Showcase Mockup
            </h2>
          </div>

          <img src={MobileMock.src} alt="" className="mobileCont" />
          <img src={MobileMockmob.src} alt="" className="mobileContmob" />

          <Slider {...settings} className="ContainerWebContainer">
            <div className="mobileSlidebox">
              <img src={MobileSlide8.src} alt="" className="mobileSlidemk n" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide9.src} alt="" className="mobileSlidemk " />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide10.src} alt="" className="mobileSlidemk " />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide11.src} alt="" className="mobileSlidemk " />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide12.src} alt="" className="mobileSlidemk " />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide13.src} alt="" className="mobileSlidemk " />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide1.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide2.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide3.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide4.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide5.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide6.src} alt="" className="mobileSlidemk" />
            </div>
            <div className="mobileSlidebox">
              <img src={MobileSlide7.src} alt="" className="mobileSlidemk" />
            </div>
          </Slider>
        </section>
      </>
    );
  }
}


// 'use client';
// import React, { Component } from "react";
// import Slider from "react-slick";
// import MobileSlide from "@/assets/images/MobileShowcase/Home/Showcase-06.png"
// import MobileMock from "@/assets/images/MobileShowcase/Home/Showcase-12.png"
// import MobileMockmob from "@/assets/images/MobileShowcase/Home/Showcase-12mob.png"
// import MobileSlide1 from "@/assets/images/MobileShowcase/Home/Showcase-07.png"
// import MobileSlide2 from "@/assets/images/MobileShowcase/Home/Showcase-08.png"
// import MobileSlide3 from "@/assets/images/MobileShowcase/Home/Showcase-09.png"
// import MobileSlide4 from "@/assets/images/MobileShowcase/Home/Showcase-10.png"
// import MobileSlide5 from "@/assets/images/MobileShowcase/Home/Showcase-11.png"
// import MobileSlide6 from "@/assets/images/MobileShowcase/Home/Showcase-13.png"
// import MobileSlide7 from "@/assets/images/MobileShowcase/Home/Showcase-14.png"

// export default class WebDesignMock extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       autoplay: true,
//       slidesToShow: 6,
//       arrows: false,
//       autoplaySpeed: 1000,
//       speed: 500
//     };

//     return (
//       <>
//         {/* Inline responsive fix for iPads */}
//         <style>{`
//          .ContainerWeb p { font-size: 18px; margin-bottom: 10px; font-weight: 400; } 
//          .ContainerWeb h2 { font-size: 32px; font-weight: 700; margin: 0 0 50px 0; }
//          @media (max-width: 1024px) { 
//          .ContainerWeb h2 { font-size: 26px; } 
//          .ContainerWeb p { font-size: 16px; } 
//          } 
//          @media (max-width: 768px) { 
//          .ContainerWeb h2 { font-size: 22px; margin-bottom: 30px; } 
//          .ContainerWeb p { font-size: 14px; } }
//         `}</style>

//         <section className="ContainerWeb">
//          <p>Website Design & Development</p> <h2>Showcase Mockup</h2>

//           <img src={MobileMock.src} alt="" className="mobileCont" />
//           <img src={MobileMockmob.src} alt="" className="mobileContmob" />

//           <Slider {...settings} className="ContainerWebContainer">
//             <div className="mobileSlidebox">
//               <img src={MobileSlide.src} alt="" className="mobileSlidemk n" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide1.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide2.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide3.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide4.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide5.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide6.src} alt="" className="mobileSlidemk" />
//             </div>
//             <div className="mobileSlidebox">
//               <img src={MobileSlide7.src} alt="" className="mobileSlidemk" />
//             </div>
//           </Slider>
//         </section>
//       </>
//     );
//   }
// }