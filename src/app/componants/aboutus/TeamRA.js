"use client";
import React from 'react'
import Slider from 'react-slick'

import { Col, Container, Row, Image } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import teamTwoR from "../../data/teamTwoR"
import { Carousel } from 'react-responsive-carousel';
import profile1 from "@/assets/images/team/team-page-img-1.jpg"
import profile2 from "@/assets/images/team/team-page-img-2.jpg"
import profile3 from "@/assets/images/team/team-page-img-3.jpg"
import profile4 from "@/assets/images/team/team-page-img-4.jpg"
// import profile5 from "../../assets/images/team/team-page-img-5.jpg"
// import profile6 from "../../assets/images/team/team-page-img-7.jpg"
// import profile7 from "../../assets/images/team/team-page-img-8.jpg"
import TeamTwo4 from './TeamTwo4';

const { title, title1, name1, describe1, title2, name2, describe2,
  title3, name3, describe3, title4, name4, describe4, } = teamTwoR;



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50px", color: "#F6F6F6" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius: "50px" }}
      onClick={onClick}
    />
  );
}
function TeamRA({ className = "" }) {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 514;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  if (width > breakpoint) {
    return (
      <>
        <TeamTwo4 />
      </>
    )
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="CardTeam">
            <Image src={profile1.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name1}</h4>
              <p className="team-two__title">{title1}</p>
              <p className="team-two__title1">{describe1}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile2.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name2}</h4>
              <p className="team-two__title">{title2}</p>
              <p className="team-two__title1">{describe2}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile3.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name3}</h4>
              <p className="team-two__title">{title3}</p>
              <p className="team-two__title1">{describe3}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile4.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name4}</h4>
              <p className="team-two__title">{title4}</p>
              <p className="team-two__title1">{describe4}</p>
            </div>
          </div>
        </div>
        {/* <div>
               <div className="CardTeam">
                 <Image src={profile5.src} alt="" className="team_img" />
                    <div className="team-two__details">
                        <h4 className="team-two__name">{name5}</h4>
                        <p className="team-two__title">{title5}</p>
                        <p className="team-two__title1">{describe6}</p>
                    </div>
                 </div> 
            </div>  
            <div>
               <div className="CardTeam">
                  <Image src={profile6.src} alt="" className="team_img" />
                    <div className="team-two__details">
                        <h4 className="team-two__name">{name6}</h4>
                        <p className="team-two__title">{title6}</p>
                        <p className="team-two__title1">{describe6}</p>
                    </div>
                 </div> 
            </div>  
            <div>
               <div className="CardTeam">
               <Image src={profile7.src} alt="" className="team_img" />
                   <div className="team-two__details">
                      <h4 className="team-two__name">{name7}</h4>
                      <p className="team-two__title">{title7}</p>
                      <p className="team-two__title1">{describe7}</p>
                    </div>
                </div> 
            </div>  
  */}

      </Slider>
    </div>
  )
}

export default TeamRA;