// import graphicdesignt from "@/data/graphicdesignt";
import studiofoodshoot from "@/app/data/studioFoodshoot";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import Title from "../Reuseable/Title";
import StudioFoodSlide from "./StudioFoodSlide";

const { images, badge, tagline, title, text1, text2, text3 } = studiofoodshoot;

const FoodShoot = () => {
    return (
        <section className="GraphicDesigning-pagestudio">
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="GraphicDesigning__left">
                            <ul className="GraphicDesigning__images">
                                {images.map((image, i) => (
                                    <li key={i}>
                                        <div className={`GraphicDesigning__img-${i + 1}`}>
                                            <Image
                                                src={require(`@/assets/images/resources/${images}`).default.src}
                                                alt=""
                                                className="food-banner"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="GraphicDesigning__badge">
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="GraphicDesigning__studio">
                            <Title title={title} tagline={tagline} className="text-left" />
                            <Link href="#" className="BtnStudio GraphicDesigning__studiobtn">
                                Enquiry Now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <StudioFoodSlide />

        </section>
    );
};

export default FoodShoot;
