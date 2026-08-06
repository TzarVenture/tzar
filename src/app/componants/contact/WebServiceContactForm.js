"use client";
import Link from "next/link";
import { useState } from "react";
import { submitContact } from "../../models/action";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from 'next/navigation';

const WebServicesContactForm = () => {

    const router = useRouter();
    
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show loader when form is submitted
        const formData = new FormData(e.target);
        try {
            const response = await submitContact({
                fullname: formData.get("fullname"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                services: formData.get("services"),
                city: formData.get("city"),
                country: formData.get("country"),
                checkbox: formData.get("checkbox"),
            });
            if (response.status === 200) {
                setStatus("success");
                router.push('/thank-you');
            } else {
                setStatus("error");
                router.push('/thank-you');
            }
        } catch (e) {
            setStatus("error");
            console.log(e);
        } finally {
            setIsSubmitting(false); // Hide loader after form submission
        }
    };

    return (
        <>
            <div className="form-dev" style={{background: "#D4AF37"}}>
                <div>
                    <h5>From Concept to Capture: We Do It All</h5>
                </div>
                <form onSubmit={handleSubmit} className="EnquiryForm">
                    <div className="form-div">
                        <label htmlFor="fullname">
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="John Doe"
                                className="form-control form-inputs"
                                required
                            />
                        </label>
                        <label htmlFor="phone">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Add phone no."
                                className="form-control form-inputs"
                                required
                            />
                        </label>
                        <label htmlFor="email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@gmail.com"
                                className="form-control form-inputs"
                                required
                            />
                        </label>
                        <label htmlFor="services">
                            <select id="services" name="services" className="form-control form-inputs" required >
                                <option value="">Services</option>
                                <option>WordPress</option>
                                <option>Shopify</option>
                                <option>React js</option>
                                <option>Next js</option>
                            </select>
                        </label>
                        <Row>
                            <Col xl={6}>
                                <label htmlFor="city">
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="Your City"
                                        className="form-control form-inputs"
                                        required
                                    />
                                </label>
                            </Col>
                            <Col xl={6}>
                                <label htmlFor="country">
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        placeholder="Your Country"
                                        className="form-control form-inputs"
                                        required
                                    />
                                </label>
                            </Col>
                        </Row>

                        <div className="form-group formlefttxt">
                            <label className="checkbox">
                                <div className="form-studiocheck">
                                    <input type="checkbox" name="checkbox" required value="I agree to T&C and Privacy Policy" />
                                    <h6 className="homeformtext">By Proceeding, I agree to <Link href="/TermsConditions" className="studioformlink"> T&C </Link>and <Link href="/privacy-policy" className="studioformlink">Privacy Policy</Link>. Yes, I would like to receive updates via WhatsApp.</h6>
                                </div>
                            </label>
                        </div>
                        <label htmlFor="submit">
                            <button className="btn btn-submit" type="submit" disabled={isSubmitting} style={{background: "#A67D44 !important", color: "#fff !important"}}>
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
                    </div>
                </form>
                {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
                {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
            </div>
        </>
    );
};

export default WebServicesContactForm;
