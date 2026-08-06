
"use client";
import React from 'react'
import Slider from 'react-slick'
import { useWindowSize } from "@react-hook/window-size/throttled";
// import VideoBg11 from "../../assets/video/Hero_Banner_Small.mp4"
// import VideoBg121 from "../../assets/video/Comp 1_3.mp4"
import StudioBanner from "./StudioBanner";
// import BannertxtSEO from '../BannerText/BannertxtSEO';

function BStudioSlider() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    fadeSpeed: 100,
    speed: 500,
    lazyLoad: true,
    focusOnSelect: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  if (width > breakpoint) {
    return (
      <>
        <StudioBanner />
      </>
    )
  }
  return (
      <div>
        <StudioBanner />
      </div>
  );
}
export default BStudioSlider
