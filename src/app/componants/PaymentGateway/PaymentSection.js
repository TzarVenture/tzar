"use client";
import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap';
import footerData from "@/app/data/footerData";
const { bg, title, phone, phone1, phoneIcon, mailIcon, contactadd, googlepartner, facebook, googlereview, socials, address, city, email, links, year, author } =
    footerData;

var tableStyle = {
    "width": "100%"
}

function PaymentSection() {
    return (
        <>
            <section className='paymentsection'>
                <Container>
                    <div className='section-div-pay'>
                        <Row className="justify-content-center">
                            <Col xl={6} md={6}>
                                <div className="text-align-right">
                                    <Image src='/tzarpayment.jpg' alt='payment tzar' width="100%" />
                                </div>
                            </Col>
                            <Col xl={6} md={6}>
                                <div className='payment-set'>
                                    <h1 className="text-center">Payment Info</h1>
                                    <div className='account-card'>
                                        <h2 className="accout-tit">Account Details:-</h2>
                                        <br />
                                        <table style={tableStyle}>
                                            <tbody>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <td><strong>Name:</strong> </td>
                                                    <td>Tzar Digital Agency</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Bank Name :</strong> </td>
                                                    <td>Kotak Mahindra Bank</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Account Number:</strong></td>
                                                    <td>2545306876</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>IFSC code:</strong></td>
                                                    <td>KKBK0001363</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>GST :</strong></td>
                                                    <td>27ASYPR9821N1ZF</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='payment-set'>
                                    <div className='account-card2'>

                                        <h3 className="contact-widget__title">Address</h3>
                                        <p className="footer-widget__contact-text">
                                            {address} {city}
                                        </p>



                                        <h3 className="contact-widget__title">Contact Us</h3>
                                        <div className="footer-flex">
                                            {/* <img src={mailIcon.src} alt="" width="15px" height="15px" /> &nbsp; */}
                                            <i class="fi-rr-envelope"></i>  &nbsp;
                                            <a
                                                href={`mailto:${email}`}
                                                className="footer-widget__contact-text"
                                            >
                                                {email}
                                            </a>
                                        </div>
                                        {/* <img src={phoneIcon.src} alt="" width="15px" /> &nbsp; */}

                                        <i class="fi-rr-phone-call"></i> &nbsp;
                                        <a
                                            href={`tel:${phone.split(" ").join("")}`}
                                            className="footer-widget__contact-text"
                                        >
                                            + {phone} ,
                                        </a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a
                                            href={`tel:${phone1.split(" ").join("")}`}
                                            className="footer-widget__contact-text"
                                        >
                                            + {phone1}
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
};
export default PaymentSection;
