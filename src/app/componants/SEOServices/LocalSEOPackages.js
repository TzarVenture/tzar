'use client';
import localseopackdata from "@/app/data/localseopackdata";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEOPackAccord from "../SEOServices/SEOPackAccord";

const { bg, faqs, bottomText } = localseopackdata;

const LocalSEOPackages = () => {
    return (
        <section className="seopack-page">
            <Container>
                <div className="get-a-quote-pack-div">
                    <table id="seo-packages" className="pack-main">
                        <thead>
                            <tr>
                                <th>Local Seo Packages</th>
                                <th>Basic</th>
                                <th>Growth</th>
                                <th>Booster</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Keywords Plan</td>
                                <td>Upto 10</td>
                                <td>Upto 20</td>
                                <td>Upto 40</td>
                            </tr>
                            <tr>
                                <td>Primary KW + Secondary KW</td>
                                <td>5 + 5</td>
                                <td>10 + 10</td>
                                <td>20 + 20</td>
                            </tr>
                            <tr>
                                <td>Best Suited For</td>
                                <td>Business with 1 location</td>
                                <td>Business with 2 location</td>
                                <td>Business with more than 2 locations</td>
                            </tr>
                            <tr>
                                <td>Expected Results</td>
                                <td>Rankings on Google Map + More Conversion (Calls + Leads)</td>
                                <td>Rankings on Google Map + More Conversion (Calls + Leads)</td>
                                <td>Rankings on Google Map + More Conversion (Calls + Leads)</td>
                            </tr>
                            <tr>
                                <td>Keywords Type</td>
                                <td>Localized</td>
                                <td>Localized</td>
                                <td>Localized</td>
                            </tr>
                            <tr>
                                <td><a href="#"></a></td>
                                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="faq-page__top">
                    {faqs.map((singlepack) => (
                        <div className="faq-page__single">
                            <SEOPackAccord faqs={singlepack} />
                        </div>
                    ))}
                </div>
                <table id="seo-packages">
                    <tbody>
                        <tr>
                            <td><a href="#"></a></td>
                            <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
                            <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
                            <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </section>
    );
};

export default LocalSEOPackages;
