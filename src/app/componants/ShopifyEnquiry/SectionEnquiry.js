"use client";

import { useState } from "react";

export default function SectionEnquiry() {
    return (
        <>
            <section className="SectionEnquiry">
                <div className="container herocontent">
                    <div>
                        <h1 className="title-head">Let's build an e-commerce masterpiece together! Drop us a line for Shopify website development.</h1>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div>
                                <div> <i className="fa fa-phone" aria-hidden="true"></i>+ 91 730-405-6607,  + 91 776-077-5875</div><br />
                                <div><i className="fa fa-envelope" aria-hidden="true"></i> corporate@tzar.co</div><br />
                                <div> <i className="fa fa-map-marker" aria-hidden="true"></i> WeWork K. Raheja Platinum, Sag Baug Road, off Andheri - Kurla Rd, Marol
                                    Andheri East Mumbai, Maharashtra 400093</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div>
                                <form>
                                    <div className="row">
                                        <label htmlFor="fullname" className="col-6">
                                            <input type="text"
                                                id="fullname"
                                                name="fullname" placeholder="Enter your name" className="form-control-shopify"
                                                autoComplete="off" required
                                            />
                                        </label>
                                        <label htmlFor="phone" className="col-6">
                                            <input type="tel"
                                                name="phone" id="phoneno" placeholder="Phone no." className="form-control-shopify"
                                                autoComplete="off" required pattern="[0-9]{10}"
                                            />
                                        </label>
                                    </div>
                                    <label htmlFor="email" className="col-12">
                                        <input type="email"
                                            name="email" id="email" placeholder="example@gmail.com" className="form-control-shopify"
                                            autoComplete="off" required
                                        />
                                    </label>

                                    <label htmlFor="message" className="col-12">
                                        <textarea type="message"
                                            name="message" id="message" placeholder="Give us a small brief about your project*" className="form-control-shopify"
                                            autoComplete="off" required
                                        />
                                    </label>

                                    <label htmlFor="submit" className="col-12">
                                        <button type="submit" value="Submit" className="shopify-btn-submit" >GET A CALL BACK</button>
                                    </label>
                                </form>
                                <a type="button" className="hero-whapp-btn2">SEND A WHATSAPP MESSAGE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}