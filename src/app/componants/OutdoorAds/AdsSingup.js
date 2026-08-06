"use client";
import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap';
// import AdsSingupForm from './AdsSingupForm';
// import section2ads from "@/assets/images/resources/bannerads.png"
import flow1 from "@/assets/images/resources/flow4.png" 


function AdsSingup() {
    return (
        <>
            <section className='adssingup-section'>
            {/* <img src={bg.src} alt='mumbai-background' className='singup-banner' /> */}
                <h1 className='ads-heading1'>How it works?</h1>
                <Container>
                    <div className='ads-heading'>
                        <Image src={flow1.src} alt=""  className="flowchart"  /> 
                    </div>

                    {/* <AdsSingupForm /> */}

                </Container>
            </section>
        </>
    )
};
export default AdsSingup
