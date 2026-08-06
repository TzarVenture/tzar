// components/BackgroundVideo.js
'use client';
import React from "react";
import { Button, Col, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from "@react-hook/window-size/throttled";
import BannertxtR from './BannertxtR';
import ContactForm from '../contact/ContactForm';

function handleButtonClick() {
    const element = document.getElementById('Contactform');
    element.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick1() {
    const element = document.getElementById('ServicesOne');
    element.scrollIntoView({ behavior: 'smooth' });
}


const BackgroundVideo = () => {
    return (
        <>
            <div className="video-container">
                <Row>
                    <Col lg={6} md={6} col={12}>
                        <video autoPlay loop muted playsInline className="video-bg desktop-video">
                            <source
                                src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <video autoPlay loop muted playsInline className="video-bg mobile-video">
                            <source
                                src="https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <div className="content-overlay">
                            <div className="banner-heading">
                                <TypeAnimation
                                    sequence={['Over a 1000+ Satisfied Clients were Served in the Year 2024. ', 1000, '']}
                                    speed={25}
                                    deletionSpeed={99}
                                    wrapper="h2"
                                    repeat={Infinity}
                                />
                            </div>

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
                    <Col lg={6} md={6} col={12}>
                        <ContactForm />
                    </Col>
                </Row>



                <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        .mobile-video {
          display: none;
        }
  .content-overlay {
          position: absolute;
          top: 50%;
          left: 5%; /* Adjust as per your design */
          transform: translateY(-50%);
          color: white;
          text-align: left; /* Aligns the text to the left */
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .buttons button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 1rem;
          color: #fff;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .buttons button:hover {
          background-color: #005bb5;
        }

        /* Media Query for Mobile Devices */
        @media (max-width: 768px) {
          .desktop-video {
            display: none;
          }
          .mobile-video {
            display: block;
          }
          h1 {
            font-size: 1.5rem;
          }
          .buttons button {
            font-size: 0.9rem;
            padding: 8px 15px;
          }
        }
      `}</style>
            </div>
        </>
    );
};

export default BackgroundVideo;
