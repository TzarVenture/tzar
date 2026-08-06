import React from 'react'
// import { Col, Container, Image, Row } from "react-bootstrap";
// import Title from "../Reuseable/Title";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi" 
// import * as AiIcons from "react-icons/ai" 
import * as FaIcons from "react-icons/fa" 
import * as RiIcons from "react-icons/ri" 
import * as ImIcons from "react-icons/im" 


const { bg,  title, tagline, benefits1, benefits , benefits2   } = benefitsckm;

function BenefitsSEO  ({ className = "" }) {
  return (
    <>
      <section className="BenefitsSEOContainer">
      <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <h1 className="titleHeadSEO"> Benefits</h1>
            <div className="boxContainerSeoMain">
               <div className="boxContainerSeoB">
                <HiIcons.HiChartBar className="Seoicons" />
                 <h1>50% of sales</h1>
                 <p>Our best result – up to 50% of the customer revenue through SEO</p>
               </div>
               <div className="boxContainerSeoB">
               <FaIcons.FaRegNewspaper className="Seoicons" />
                  <h1>Payback in 2-3 months</h1>
                  <p>You get your marketing budget paid back within few months of digital advertising.</p>
               </div>
               <div className="boxContainerSeoB">
                <ImIcons.ImTree className="Seoicons" />
                  <h1>5% conversion rate</h1>
                  <p>Increase in website visitior by 5% for our clients</p>               </div>
               <div className="boxContainerSeoB">
               <HiIcons.HiChartBar className="Seoicons" />
                  <h1>60% of repeat sales</h1>
                  <p>The highest rate for repeat sales through personalized offers and its series of reminders</p>
               </div>
               <div className="boxContainerSeoB">
                  <RiIcons.RiWechatLine className="Seoicons" />
                  <h1>Customers stay with you for a long time</h1>
                  <p>You are 2-3 times longer communicating with your clients, respectively purchases also 2-3 times more</p>
               </div>
               <div className="boxContainerSeoB">
                 <HiIcons.HiUserGroup className="Seoicons" />
                  <h1>At 3-5 times more money from the customer</h1>
                  <p>A customer brings in an average of 3-5 times more money by staying loyal customer forever</p>
               </div>
            </div>

           {/* <div className="boxContainerMain">
                <div className="boxContainerSEO1">
                 <HiIcons.HiChartBar className="Seoicons" />
                 <h1>50% of sales</h1>
                 <p>Our best result – up to 50% of the customer revenue through SEO</p>
                </div>
                 <div className="boxContainerSEO2">
                  <FaIcons.FaRegNewspaper className="Seoicons" />
                  <h1>Payback in 2-3 months</h1>
                  <p>You get your marketing budget paid back within few months of digital advertising.</p>
                </div>
                 <div className="boxContainerSEO3">
                  <ImIcons.ImTree className="Seoicons" />
                  <h1>5% conversion rate</h1>
                  <p>Increase in website visitior by 5% for our clients</p>
                </div>
                 <div className="boxContainerSEO4">
                  <HiIcons.HiChartBar className="Seoicons" />
                  <h1>60% of repeat sales</h1>
                  <p>The highest rate for repeat sales through personalized offers and its series of reminders</p>
                </div>
                 <div className="boxContainerSEO5">
                  <RiIcons.RiWechatLine className="Seoicons" />
                  <h1>Customers stay with you for a long time</h1>
                  <p>You are 2-3 times longer communicating with your clients, respectively purchases also 2-3 times more</p>
                </div>
                 <div className="boxContainerSEO6">
                 <HiIcons.HiUserGroup className="Seoicons" />
                  <h1>At 3-5 times more money from the customer</h1>
                  <p>A customer brings in an average of 3-5 times more money by staying loyal customer forever</p>
                </div>
           </div> */}
        </section>
 
    </>
  )
}
export default BenefitsSEO