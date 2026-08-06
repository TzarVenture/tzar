"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import MobileMockmob from "@/assets/images/MobileShowcase/Home/Showcase-12mob.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/Home/Showcase-07.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/Home/Showcase-08.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/Home/Showcase-09.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/Home/Showcase-10.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/Home/Showcase-11.png"
import MobileSlide6 from "@/assets/images/MobileShowcase/Home/Showcase-13.png"
import MobileSlide7 from "@/assets/images/MobileShowcase/Home/Showcase-14.png"

const ShowcaseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    MobileSlide1.src,
    MobileSlide2.src,
    MobileSlide3.src,
    MobileSlide4.src,
    MobileSlide5.src,
    MobileSlide6.src,
    MobileSlide7.src,
  ];

  return (
    <div className="slider-container">
      <div className="phone-frame">
        <Image 
          src={MobileMockmob.src} 
          alt="Phone Mockup" 
          width={300} 
          height={600} 
          className="phone-image"
        />
        <div className="slider">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="slide-image">
                <Image src={src} alt={`Screenshot ${index + 1}`} width={300} height={600} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #002c6b; /* Adjust background color */
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .phone-frame {
          position: relative;
          width: 300px; 
          height: 600px;
        }

        .phone-image {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        .slider {
          position: absolute;
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          z-index: 2;
          border-radius: 15px;
          overflow: hidden;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .phone-frame {
            width: 200px;
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .phone-frame {
            width: 150px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default ShowcaseSlider;
