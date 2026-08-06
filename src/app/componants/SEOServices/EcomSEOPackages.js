'use client';
import ecomseopackdata from "@/app/data/ecomseopackdata";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import SEOPackAccord from "../SEOServices/SEOPackAccord";

const { faqs } = ecomseopackdata;

const EcomPackagestab = () => {
  const tableWrapperStyle = {
    width: "100%",
    overflowX: "auto", // fallback if content gets too large
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "fixed", // ensures table fits container
    fontSize: "14px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
    wordWrap: "break-word",
  };

  const headerStyle = {
    backgroundColor: "#f8f8f8",
    fontWeight: "bold",
  };

  return (
    <section className="seopack-page" id="seopack-page-cell">
      <Container>
        <div className="get-a-quote-pack-div" style={tableWrapperStyle}>
          <table id="seo-packages" style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thTdStyle, ...headerStyle }}>Ecommerce Seo</th>
                <th style={{ ...thTdStyle, ...headerStyle }}>Nano</th>
                <th style={{ ...thTdStyle, ...headerStyle }}>Enterprise</th>
                <th style={{ ...thTdStyle, ...headerStyle }}>Blast</th>
                <th style={{ ...thTdStyle, ...headerStyle }}>Mega</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={thTdStyle}>Keywords Plan</td>
                <td style={thTdStyle}>Upto 30</td>
                <td style={thTdStyle}>Upto 50</td>
                <td style={thTdStyle}>Upto 100</td>
                <td style={thTdStyle}>Upto 200</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Focus Keywords</td>
                <td style={thTdStyle}>15</td>
                <td style={thTdStyle}>25</td>
                <td style={thTdStyle}>50</td>
                <td style={thTdStyle}>100</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Other Relevant Keywords</td>
                <td style={thTdStyle}>15</td>
                <td style={thTdStyle}>25</td>
                <td style={thTdStyle}>50</td>
                <td style={thTdStyle}>100</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Best Suited for</td>
                <td style={thTdStyle}>Upto 20 Products</td>
                <td style={thTdStyle}>Upto 40 Products</td>
                <td style={thTdStyle}>50 to 70 Products</td>
                <td style={thTdStyle}>100 to 150 Products</td>
              </tr>
              <tr>
                <td style={thTdStyle}></td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">Get Pricing</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">Get Pricing</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">Get Pricing</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">Get Pricing</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="faq-page__top">
          {faqs.map((singlepack, index) => (
            <div className="faq-page__single" key={index}>
              <SEOPackAccord faqs={singlepack} />
            </div>
          ))}
        </div>

        {/* SignUp Table */}
        <div style={tableWrapperStyle}>
          <table id="seo-packages" style={tableStyle}>
            <tbody>
              <tr>
                <td style={thTdStyle}></td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">SignUp</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">SignUp</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">SignUp</a>
                </td>
                <td style={thTdStyle}>
                  <a href="#" className="get-a-quote-pack">SignUp</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default EcomPackagestab;
