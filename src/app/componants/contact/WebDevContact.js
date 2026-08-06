"use client";
import Link from "next/link";
import { useState } from "react";
import { submitContact } from "../../models/actionweb";
import { Col, Container, Row, Image } from "react-bootstrap";

import googlepartner from "@/assets/images/icons/googlepartner.png";
import facebook from "@/assets/images/icons/facebook.png";

const WebdevContact = () => {
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);
        try {
            const response = await submitContact({
                websitesdevelopment: formData.get("websitesdevelopment"),
                socialmedia: formData.get("socialmedia"),
                perfomancemarketing: formData.get("perfomancemarketing"),
                influencermarketing: formData.get("influencermarketing"),
                brandmarketing: formData.get("brandmarketing"),
                searchengineoptimization: formData.get("searchengineoptimization"),
                productshoot: formData.get("productshoot"),
                animation: formData.get("animation"),
                logodesign: formData.get("logodesign"),
                productpackaging: formData.get("productpackaging"),
                domain: formData.get("domain"),
                requirmentmsg: formData.get("requirmentmsg"),
                fullname: formData.get("fullname"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                city: formData.get("city"),
                country: formData.get("country"),
                termscondition: formData.get("termscondition"),
            });
            if (response.status === 200) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (e) {
            setStatus("error");
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="website-enquiryform" id="enquiry">
                <div className="container">
                    <div className="web-dev-enquiry">
                        <div className="row">
                            <div className="col-lg-9 col-md-6 col-12">
                                <div className="webform-dev">
                                    <form onSubmit={handleSubmit} className="websitedev-enquiryform">
                                        <div className="form-div">
                                            <Row>
                                                <Col xl={6}>
                                                    <h4>Your eCommerce Project Details</h4>
                                                    <h3>Services Needed:</h3>
                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="websitesdevelopment">
                                                            <input type="checkbox" name="websitesdevelopment" id="websitesdevelopment" value="Websites Design & Development" />
                                                            Websites Design & Development
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="socialmedia">
                                                            <input type="checkbox" name="socialmedia" id="socialmedia" value="Social Media (SMO | SMM)" />
                                                            Social Media (SMO | SMM)
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="perfomancemarketing">
                                                            <input type="checkbox" name="perfomancemarketing" id="perfomancemarketing" value="Performance Marketing" />
                                                            Performance Marketing
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="influencermarketing">
                                                            <input type="checkbox" name="influencermarketing" id="influencermarketing" value="Influencer Marketing" />
                                                            Influencer Marketing
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="brandmarketing">
                                                            <input type="checkbox" name="brandmarketing" id="brandmarketing" value="Brand Marketing" />
                                                            Brand Marketing
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="searchengineoptimization">
                                                            <input type="checkbox" name="searchengineoptimization" id="searchengineoptimization" value="Search Engine Optimization (SEO)" />
                                                            Search Engine Optimization (SEO)
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="productshoot">
                                                            <input type="checkbox" name="productshoot" id="productshoot" value="Product Shoot" />
                                                            Product Shoot
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="animation">
                                                            <input type="checkbox" name="animation" id="animation" value="2D&3D Animation" />
                                                            2D&3D Animation
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="logodesign">
                                                            <input type="checkbox" name="logodesign" id="logodesign" value="Logo Design" />
                                                            Logo Design
                                                        </label>
                                                    </div>

                                                    <div className="checkboxserviceform">
                                                        <label htmlFor="productpackaging">
                                                            <input type="checkbox" name="productpackaging" id="productpackaging" value="Product Packaging" />
                                                            Product Packaging
                                                        </label>
                                                    </div>

                                                    <label htmlFor="domain">Website Address / Domain:</label>
                                                    <input
                                                        type="text"
                                                        id="domain"
                                                        name="domain"
                                                        placeholder="Your Domain"
                                                        className="webdevformcontrol"
                                                        required
                                                    />

                                                    <label htmlFor="requirmentmsg">Describe Your eCommerce Website Needs & Goals:</label>
                                                    <p>Please explain your eCommerce website needs, timeline, and goals.</p>
                                                    <textarea id="requirmentmsg" className="webdevformcontrol" name="requirmentmsg" rows="4" cols="50"></textarea>
                                                </Col>

                                                <Col xl={6}>
                                                    <h4>Your Contact Information</h4>
                                                    <label htmlFor="fullname">Full Name</label>
                                                    <input
                                                        type="text"
                                                        id="fullname"
                                                        name="fullname"
                                                        placeholder="John Doe"
                                                        className="webdevformcontrol"
                                                        required
                                                    />
                                                    <label htmlFor="phone">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Add phone no."
                                                        className="webdevformcontrol"
                                                        required
                                                    />
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="john@gmail.com"
                                                        className="webdevformcontrol"
                                                        required
                                                    />
                                                    <label htmlFor="city">City</label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        placeholder="Your City"
                                                        className="webdevformcontrol"
                                                        required
                                                    />
                                                    <label htmlFor="country">Country</label>
                                                    <input
                                                        type="text"
                                                        id="country"
                                                        name="country"
                                                        placeholder="Your Country"
                                                        className="webdevformcontrol"
                                                        required
                                                    />

                                                    <div className="form-group formlefttxt">
                                                        <label className="checkbox">
                                                            <div className="form-studiocheck">
                                                                <input type="checkbox" name="termscondition" required value="I agree to T&C and Privacy Policy" />
                                                                <h6 className="homeformtext">By Proceeding, I agree to <Link href="/TermsConditions" className="studioformlink"> T&C </Link>and <Link href="/privacy-policy" className="studioformlink">Privacy Policy</Link>. Yes, I would like to receive updates via WhatsApp.</h6>
                                                            </div>
                                                        </label>
                                                    </div>

                                                    <label htmlFor="submit">
                                                        <button className="btn btn-submit" type="submit" disabled={isSubmitting} style={{background: "#1D4224 !important", color: "#fff !important"}}>
                                                            {isSubmitting ? (
                                                                <div className="btn-loader">
                                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                    Loading...
                                                                </div>
                                                            ) : (
                                                                "Submit"
                                                            )}
                                                        </button>
                                                    </label>
                                                    <br /><br />

                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="projects-web">
                                                                <h2 className="projects-counter">1,000+</h2>
                                                                <p>Projects</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="projects-web">
                                                                <h2 className="projects-counter">99%</h2>
                                                                <p>Job Success Score</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-12">
                                                            <div className="projects-web">
                                                                <h2 className="projects-counter">500+</h2>
                                                                <p>Trusted Clients Globally</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </form>
                                    {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
                                    {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="form-partners">
                                    <Image src={googlepartner.src} alt="googlepartner" width="300" />
                                    <Image src={facebook.src} alt="facebook" width="280" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WebdevContact;
