'use client';
import seopackdata from "@/app/data/seopackdata";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEOPackAccord from "../SEOServices/SEOPackAccord";

const { bg, faqs, bottomText } = seopackdata;

const SEOPackagetab = () => {
  return (
    <div className="seopack-page" id="seopack-page-cell">
      <div className="table-scroll-new" >
        <div className="get-a-quote-pack-div">
          <table id="seo-packages" className="pack-main">
            <thead>
              <tr>
                <th>National SEO Packages</th>
                <th>Growth</th>
                <th>Premium</th>
                <th>High Volume</th>
                <th>Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Keywords Plan</td>
                <td>Upto 25</td>
                <td>Upto 40</td>
                <td>Upto 75</td>
                <td>Upto 100</td>
              </tr>
              <tr>
                <td><a href="#"></a></td>
                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
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
              <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SEOPackagetab;
