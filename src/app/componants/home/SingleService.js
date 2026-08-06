'use client';
import Link from "next/link";
import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

const SingleService = ({ service = {} }) => {
  const { title, icon } = service;

  return (
    <>
      {/* ⭐ MOBILE ONLY FIX — DOES NOT AFFECT DESKTOP */}
      <style>
        {`
          @media (max-width: 576px) {
            
            /* Move icon to left side */
            .services-one__single {
              position: relative;
            }

            .services-one__single .services-one__icon {
              position: absolute;
              left: 10px;         /* ⭐ left side placement */
              top: 40px;          /* ⭐ below number */
            }

            .services-one__single .services-one__icon span {
              font-size: 28px !important;
            }

            /* Adjust text so it doesn't overlap */
            .services-one__single h3.services-one__title {
              font-size: 13px !important;
              line-height: 1.25 !important;
              padding-left: 45px;   /* ⭐ text shifts right to avoid icon */
              margin-top: 80px;     /* ⭐ keeps it below icon properly */
            }

            .services-one__single {
              min-height: 200px !important;
              padding: 12px !important;
            }
          }
        `}
      </style>

      <Col xs={6} sm={6} md={4} lg={4} xl={4} className="animated fadeInUp">
        <div className="services-one__single">
          <h3 className="services-one__title" style={{color: "#D4AF37"}}>
            <a>
              {title.split("\n").map((t, i) => (
                <Fragment key={i}>
                  {t} <br />
                </Fragment>
              ))}
            </a>
          </h3>

          <div className="services-one__icon" style={{color: "#D4AF37"}}>
            <span className={icon}></span>
          </div>

          <div className="services-one__count" style={{color: "#D4AF37"}}></div>
        </div>
      </Col>
    </>
  );
};

export default SingleService;
