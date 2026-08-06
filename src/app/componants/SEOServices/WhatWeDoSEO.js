"use client";
import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
// import Title from "../Reuseable/Title";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi" 
import * as AiIcons from "react-icons/ai" 
import * as FaIcons from "react-icons/fa" 
import * as RiIcons from "react-icons/ri" 
import * as ImIcons from "react-icons/im" 
import * as GiIcons from "react-icons/gi" 
import * as BsIcons from "react-icons/bs" 

const { bg,title, tagline, benefits1, benefits , benefits2   } = benefitsckm;

function WhatWeDoLG  ({ className = "" }) {
  return (
    <>
    
 
    <section className="WhatSeoContainer">
    <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <h1 className="titleHeadSeo"> WHAT WE DO?</h1>
        <Container>
          <div className="boxContainerMainSeo">
                <div className="boxContainerSeo">
                <GiIcons.GiTrophyCup className="Seoicons" />
                  <h1>Local Fame</h1>
                  <p>Press-releases and links at all local directories and forums</p>
                </div>
                 <div className="boxContainerSeo">
                 <BsIcons.BsCodeSlash className="Seoicons" />
                 <h1>On-page SEO</h1>
                 <p>Optimization of HTML code and page content</p>
                </div>
                 <div className="boxContainerSeo">
                 <FaIcons.FaUser className="Seoicons" />
                  <h1>Conversion Optimization</h1>
                  <p>Increasing conversion of the percentage of visitors into customers</p>
                </div>
                <div className="boxContainerSeo">
                {/* <GiIcons.GiTrophyCup className="ppcicons" /> */}
                <FaIcons.FaUser className="Seoicons" />
                  <h1>Competitive Research</h1>
                  <p>Find the strengths and weaknesses of current and potential competitors</p>
         
                 {/* <p>Our best result – up to 50% of the customer revenue through SEO</p> */}
                </div>
                 <div className="boxContainerSeo">
                 <HiIcons.HiDocument className="Seoicons" />
                 <h1>Content Marketing</h1>
                 <p>Create content that attract attention</p>

                  {/* <p>You get your marketing budget paid back within few months of digital advertising.</p> */}
                </div>
                 <div className="boxContainerSeo">

                 <ImIcons.ImTree className="Seoicons" />
                    <h1>Link Building</h1>
                    <p>Let search engines know about your website</p>
                 {/* <p>Increase in website visitior by 5% for our clients</p> */}
                </div>
            </div>
        </Container>
    </section>
 
    </>
  )
}
export default WhatWeDoLG