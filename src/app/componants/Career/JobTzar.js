import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import bg from "@/assets/images/resources/counter-one-pattern.png"

function JobTzar() {
  return (
    <section className="job__pageMB">
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
       <Container className="job__Mainbox">
        <Row>
          <Col xl={12}>
            <h1>Work Culture At Tzar</h1>
            <p>At Tzar Venture we are a passionate group of people dedicated to making lasting relationships and building new technologies that improve people’s lives. We are looking for talented individuals to join our team and change the way people work.</p>

            <p className="group">We are a group of people dedicated to create a mark in the society by manifesting lasting relationships with clients and discovering new ways to improve people’s business and thought process. We do not believe in straining our minds for hours rather we work on target basis. Once the set work is complete you are free to enjoy the day. We work hard but party harder. Anyone with similar mindset is welcome to join us.</p>  
          
            <p className="gangtxt">If you do not fit into above JDs but still wish to work with us and be the part of Tzar Gang</p>  

            <p className="EmailTxt">You can send us your resume @ corporate@tzar.co</p>  
            </Col>
       </Row>
      </Container> 
   </section> 
  )
}

export default JobTzar
