"use client";
import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import cotentmarketingcd from '@/app/data/cotentmarketingcd';
import * as HiIcons from "react-icons/hi";
import Slider from 'react-slick';
import { useWindowSize } from "@react-hook/window-size/throttled";

const { HeadTitle,title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, 
  title5, subtitle5, title6, title7, title8, title9, title10, subtitle6, subtitle7 , subtitle8, 
  subtitle9, subtitle10, tagline, text2, ppcmgmt} = cotentmarketingcd ;


function ContentmarketingcardsR({ className = "" }) {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 991;
  const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 500,
  arrows: false,
  autoplaySpeed: 2000,
  lazyLoad: true,
  focusOnSelect: true,
  pauseOnHover: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 991, // iPad and tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  if (width > breakpoint) {
  return (
    <>
       <section className="ContentmarketingCards-page">
       <div className="maincm">
            <h1>{HeadTitle}</h1>
            <p style={{textAlign: "center"}}>{text2}</p>
       <div className='container-fluid'>   
        <div className="cardscm"> 
        <div>  
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title1}</h3>
                <p className="ContantMarketingGoals__text1">{subtitle1}</p>
            </div>
         </div>
         <div>
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title2}</h3>
                  <p className="ContantMarketingGoals__text1">{subtitle2}</p>
            </div>
         </div>
         <div>
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title3}</h3>
                  <p className="ContantMarketingGoals__text1">{subtitle3}</p>
            </div>
         </div>
         <div>
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title4}</h3>
                  <p className="ContantMarketingGoals__text1">{subtitle4}</p>
            </div>
         </div>
         <div>
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title5}</h3>
                  <p className="ContantMarketingGoals__text1">{subtitle5}</p>
            </div>
         </div>
         <div>
            <div className="cardcm">
                <HiIcons.HiOutlinePhotograph className="Cmicons" style={{color: "#1D4224"}}/>
                <h3 className="ContantMarketingGoals__text">{title6}</h3>
                  <p className="ContantMarketingGoals__text1">{subtitle6}</p>
            </div>
         </div>
         </div>
       </div>
      </div>


  `    </section>
      </>
    )
  }

  return (
    <>
    <div>
        <Slider {...settings} className="CMSlider">
         <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title1}</h3>
            <p className="ContantMarketingGoals__text1">{subtitle1}</p>
          </div>
          <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title2}</h3>
            <p className="ContantMarketingGoals__text2">{subtitle2}</p>
          </div>
          <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title3}</h3>
            <p className="ContantMarketingGoals__text3">{subtitle3}</p>
          </div>
          <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title4}</h3>
            <p className="ContantMarketingGoals__text4">{subtitle4}</p>
          </div>
          <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title5}</h3>
            <p className="ContantMarketingGoals__text5">{subtitle5}</p>
          </div>
          <div className="cardcm">
            <HiIcons.HiOutlinePhotograph className="Cmicons"/>
            <h3 className="ContantMarketingGoals__text">{title6}</h3>
            <p className="ContantMarketingGoals__text6">{subtitle6}</p>
          </div>
        </Slider>
      </div>



    </>
  )
}

export default ContentmarketingcardsR;
