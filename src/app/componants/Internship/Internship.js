"use client";
import intership from "@/app/data/intership";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import lady1 from "@/assets/images/resources/jobs/1-2.png";

const { images, badge, tagline, Ititle, text1, text2 } = intership;

const Intership = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", text: "" });

  const handleApplyClick = (jobTitle, text) => {
    setPopupContent({ title: jobTitle, text });
    setPopupVisible(true);
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <section className="intership__page">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="intership__right">
              <h6 className="Itext-lefth6">{tagline}</h6>
              <h1 className="Itext-left">{Ititle}</h1>
              <p className="intership__right-text-1">{text1}</p>
              <h4 className="intership__right-text-2">{text2}</h4>
            </div>
          </Col>

          <Col xl={6}>
            <div className="hiringCard3">
              <Image src={lady1.src} alt="" />
              <h1>Social Media Marketing Intern</h1>
              <p>
                We are looking for creative and active mind who is pro with social media
                marketing techniques specifically with Instagram and Facebook.
              </p>
              <button
                className="thm-btn intership__btn"
                onClick={() =>
                  handleApplyClick(
                    "Social Media Marketing Intern",
                    "You can send us your resume to corporate@tzar.co."
                  )
                }
              >
                Apply Now
              </button>
            </div>
          </Col>

          <Col xl={6}>
            <div className="hiringCard4">
              <Image src={lady1.src} alt="" />
              <h1>Content Writer Intern</h1>
              <p>
                With an experience of 2-4 years with Digital Marketing Agency and an
                aptitude to work on target basis.
              </p>
              <button
                className="thm-btn intership__btn1"
                onClick={() =>
                  handleApplyClick(
                    "Content Writer Intern",
                    "Please send your resume to corporate@tzar.co."
                  )
                }
              >
                Apply Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Simple Popup */}
      {popupVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "90%",
              textAlign: "center",
            }}
          >
            <h2>{popupContent.title}</h2>
            <p>{popupContent.text}</p>
            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intership;
