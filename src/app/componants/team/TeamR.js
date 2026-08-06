'use client';
import React from 'react'
import Slider from 'react-slick'

import { Col, Container, Row, Image } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import teamTwoR from "../../data/teamTwoR"
import { Carousel } from 'react-responsive-carousel';
import profile1 from "@/assets/images/team/team-page-img-1.png"
import profile2 from "@/assets/images/team/team-page-img-2.jpg"
import profile3 from "@/assets/images/team/team-page-img-3.jpg"
import profile4 from "@/assets/images/team/team-page-img-4.jpg"
import profile5 from "@/assets/images/team/team-page-img-5.jpg"
import profile6 from "@/assets/images/team/team-page-img-7.jpg"
// import profile7 from "@/assets/images/team/team-page-img-8.jpg"
import profile8 from "@/assets/images/team/vivek11.png"
import profile9 from "@/assets/images/team/sanskar11.png"
import profile10 from "@/assets/images/team/mansi11.jpg"
import profile11 from "@/assets/images/team/pooja11.jpg"
// import TeamOne from '../TeamOne/TeamOne';
import TeamTwo6 from './TeamTwo6';
// import TeamCard from './TeamCard';

const { title, title1, name1, describe1,
  title2, name2, describe2,
  title3, name3, describe3,
  title4, name4, describe4,
  title5, name5, describe5,
  title6, name6, describe6,
  title7, name7, describe7,
  title8, name8, describe8,
  title9, name9, describe9,
  title10, name10, describe10,
  tagline, socials, teams } = teamTwoR;



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
function TeamR({ className = "" }) {
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
        <TeamTwo6 />
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
            <Image src={profile6.src} alt="" className="team_img" />
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
        <div>
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
            <Image src={profile8.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name6}</h4>
              <p className="team-two__title">{title6}</p>
              <p className="team-two__title1">{describe6}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile9.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name7}</h4>
              <p className="team-two__title">{title7}</p>
              <p className="team-two__title1">{describe7}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile10.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name8}</h4>
              <p className="team-two__title">{title8}</p>
              <p className="team-two__title1">{describe8}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile11.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name9}</h4>
              <p className="team-two__title">{title9}</p>
              <p className="team-two__title1">{describe9}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="CardTeam">
            <Image src={profile2.src} alt="" className="team_img" />
            <div className="team-two__details">
              <h4 className="team-two__name">{name10}</h4>
              <p className="team-two__title">{title10}</p>
              <p className="team-two__title1">{describe10}</p>
            </div>
          </div>
        </div>


      </Slider>
    </div>
  )
}

export default TeamR;