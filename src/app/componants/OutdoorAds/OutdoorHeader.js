/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useWindowSize } from "@react-hook/window-size/throttled";
import { Row, Col, Container } from 'react-bootstrap';
// import AdsContact from '../ContactPage/AdsContact';
import AdsHeroslider from './AdsHeroslider';
import { TypeAnimation } from 'react-type-animation';
import ContactForm from '../contact/ContactForm';

function OutdoorHeader() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;

    if (width > breakpoint) {
        return (
            <>
                <section className='Ads-header'>
                    {/* <img src={singupbanner.src} alt='mumbai-background' className='singup-banner' /> */}
                    <Container>
                        <Row>
                            <Col xl={7} md={7} sm={12}>
                                <div className="singup-texts ads-headingtext">
                                    {/* <h1 className="sec1-h1_1">We Don&apos;t Sell Products</h1> */}
                                   
                                    <TypeAnimation
                                        sequence={['We Dont Sell Products', 1000, '']}
                                        speed={25}
                                        deletionSpeed={99}
                                        wrapper="h3"
                                        repeat={Infinity}
                                    /> 
                                    <h1 className="banner-sec_heading2">WE MAKE ICONIC BRANDS</h1>
                                   
                                    <AdsHeroslider />
                                </div>
                            </Col>
                            <Col xl={5} md={5} sm={12}>
                                <ContactForm/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
    return (
        <>
            <section className='Ads-header'>
                {/* <img src={singupbanner.src} alt='mumbai-background' className='singup-banner' /> */}
                <Container>
                    <Row>
                        <Col xl={12} md={12} sm={12}>
                            <div className='singup-texts ads-headingtext'>
                                <h1 className='sec1-h1_1'>We Don&apos;t Sell Products</h1>
                                <h1 className='banner-sec_heading2'>WE MAKE ICONIC BRANDS</h1>
                                <AdsHeroslider />
                            </div>
                        </Col>
                        <Col xl={12} md={12} sm={12}>
                        <ContactForm/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default OutdoorHeader
