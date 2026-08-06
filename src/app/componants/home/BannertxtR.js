import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button, Row, Col, Image } from 'react-bootstrap'
import ContactForm from '../contact/ContactForm';

function handleButtonClick() {
  const element = document.getElementById('Contactform');
  element.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick1() {
  const element = document.getElementById('ServicesOne');
  element.scrollIntoView({ behavior: 'smooth' });
}


function BannertxtR() {
  return (
    <>
      <Row>
        <Col xl={8} md={6} sm={12}>
          <div className="bannertxt">
            <TypeAnimation
              sequence={['Over a 1000+ Satisfied Clients were Served in the Year 2024.', 1000, '']}
              speed={25}
              deletionSpeed={99}
              wrapper="h2"
              repeat={Infinity}
            />

            <div className="btntxt-hero-btn">
              <div className="btnContainerdiv">
                <Button className="heroBtn" onClick={handleButtonClick1} >Our Services</Button>
                {/* {!<ServicesOne />} */}
              </div>
              <div className="btnContainerdiv">
                <Button className="heroBtn" onClick={handleButtonClick} >Contact Us</Button>
                {/* {!<ContactForm />} */}
              </div>
            </div>

          </div>
        </Col>

      </Row>
      {/* <Col xl={4} md={4} sm={4}>
        <ContactForm />
      </Col> */}
    </>
  )
}

export default BannertxtR;