import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
// import Title from "../Reuseable/Title";
import benefitsckm from "@/app/data/benefitsckm";
import * as HiIcons from "react-icons/hi"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"

const { title, tagline, benefits1, benefits, benefits2 } = benefitsckm;

function BenefitsWD({ className = "" }) {
  return (
    <>
      <section className="BenefitsWDContainer">
        <h1 className="titleHeadBenefitsWD "> BENEFITS FOR YOUR BUSINESS</h1>
        <Container>
          <div className="boxContainerMainBenefitsWD1">
            <div className="row">
              <div className="col-lg-6 col-md-4 col-12">
                <div className="boxContainerWDnew">
                  <HiIcons.HiChartBar className="bwdicons" />
                  <div>
                    <h1>5% conversion rate</h1>
                    <p>More than 5% of site visitors have come to our clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-12">
                <div className="boxContainerWDnew">
                  <BsIcons.BsFillPeopleFill className="bwdicons" />
                  <div>
                    <h1>Payback in 2-3 months</h1>
                    <p>One of our customer’ SEO shows 30% more payback than other channels of internet advertising. The average check increased by 40% from SEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-12">
                <div className="boxContainerWDnew">
                  <FaIcons.FaMoneyBillAlt className="bwdicons" />
                  <div>
                    <h1>At 3-5 times more money from the customer</h1>
                    <p>A customer brings in an average of 3-5 times more money by staying loyal customer forever</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-12">
                <div className="boxContainerWDnew">
                  <AiIcons.AiOutlineSetting className="bwdicons" />
                  <div><h1>Maintenance assistance</h1>
                    <p>Technical support, bug fixes and software updates free for 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
export default BenefitsWD;