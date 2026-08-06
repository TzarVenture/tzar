"use client";

import { useState } from "react";

export default function Herobanner() {
    return (
        <>
            <section className="ShopifyHerobanner">
                <div className="container herocontent">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h1 className="hero-title-head">LAUNCH YOUR<br /> ONLINE BUSINESS<br />  WITH A STUNNING<br />  SHOPIFY WEBSITE</h1>
                            <a type="button" className="hero-whapp-btn">SEND A WHATSAPP MESSAGE</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="hero-form-head">SUBMIT DETAILS BELOW TO GET A CALL BACK</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}