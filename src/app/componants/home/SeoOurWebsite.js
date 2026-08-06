"use client";

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SeoOurWebsite() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section className="seoweb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">

              {/* ===================== SECTION 1 ===================== */}
              <h1>Why Digital Marketing Agency is an Effective Way to Market Your Business</h1>
              <p>Many people are confused about what <b className="highlight" >digital marketing</b> is In simple words we can say Digital Marketing is a way of promoting your website by using <b className="highlight" >digital media</b> such as <b className="highlight" >email, web banners, video, audio, text, and social media</b>. This is a fairly broad definition so lets take a moment to break it all down. <b className="highlight" >Digital Marketing</b> covers different techniques and it’s not always easy to pinpoint which technique fits the bill the best. Here’s a brief rundown of some of the different techniques that are commonly used in <b className="highlight">digital marketing campaigns</b>.</p>

              {/* ===================== SECTION 2 ===================== */}
              <h1>Search Engine Optimization</h1>

              {/* First paragraph → fully visible */}
              <p><b className="highlight">Search engine optimization</b> allows website owners and bloggers to optimize their websites for specific keywords or keyword phrases.<b className="highlight"> Content marketing</b> involves developing quality content in key niches that readers in your target market would be interested in. When done effectively, <b className="highlight">search engine optimization</b> can help your website move up in the rankings of search results. Both strategies have their own advantages and disadvantages, but are they really the best alternative to one another?</p>

              {/* Second paragraph → show 2 lines only if not expanded */}
             {/* Second paragraph → 2 line clamp before expand */}
<p
  style={{
    display: "-webkit-box",
    WebkitLineClamp: showMore ? "none" : 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    position: "relative",
  }}
>
  There is no clear cut answer here, but there are a few things you can do to make
  sure you are doing everything you can to promote your website the best way you can...
  
  {/* Inline SEE MORE at end of paragraph */}
  {!showMore && (
    <span
      onClick={() => setShowMore(true)}
      style={{
        color: "#003366",
        fontWeight: 600,
        cursor: "pointer",
        marginLeft: "6px",
        background: "white",
      }}
    >
      See More...
    </span>
  )}
</p>


              {/* ===================== COLLAPSIBLE CONTENT ===================== */}
              {showMore && (
                <div>

                  <h1>Website Design</h1> <p>Developing a <b className="highlight">website</b> is relatively easy as compared to development of <b className="highlight">digital platforms</b>. <b className="highlight">TZAR VENTURE as a website development agency</b> offer website design services at affordable prices. The most important thing you should focus on is making sure you have a good <b className="highlight">conversion rate</b>. This can be measured using various methods including online and customer satisfaction surveys.</p> <h1>Content Marketing</h1> <p><b className="highlight">Content marketing</b> is an essential part of <b className="highlight">Digital Marketing strategy</b>.<b className="highlight"> Content marketing</b> is simply publishing high quality information through various social media outlets such as <b className="highlight">Facebook, Twitter, LinkedIn, FourSquare, YouTube,</b> and others. In essence, this strategy targets <b className="highlight">B2B businesses</b> and online brands that want to get their products and services in front of their target audience. If done effectively, a successful <b className="highlight">content marketing campaign</b> can get you website ranked well in the top results of major search engines.</p> <h1>Social Media Management Agency</h1> <p>When it comes to <b className="highlight">content marketing</b> and <b className="highlight">digital marketing strategy</b> implementation, a <b className="highlight"> social media management agency</b> is the best option for you. A <b className="highlight">social media management agency</b>will be able to handle the entire process from start to finish. They will ensure that your website reaches your target audience and social media audience in the fastest way possible. Thus, with the help of a SMM agency, you can be sure that you will reach the top of the search engine results within shortest period of time.</p> <p><b className="highlight">SMM agencies</b> are also adept at creating a target audience for your website. With an effective <b className="highlight">social media marketing services</b>, you can attract the right people to your website. For example, if you are planning to target younger crowd, then you need to create an engaging content that will not only attract younger crowd but also gain their trust and make them comfortable to become potential customers of your company. Thus, a <b className="highlight">SMM agency</b> will be an asset to your online business. SMM services include <b className="highlight">SEO, search engine optimization, social media marketing</b> and <b className="highlight">digital marketing strategy</b> implementation.</p> <p>SMM agencies are also adept at creating a target audience for your website. With an effective social media marketing services, you can attract the right people to your website. For example, if you are planning to target younger crowd, then you need to create an engaging content that will not only attract younger crowd but also gain their trust and make them comfortable to become potential customers of your company. Thus, a SMM agency will be an asset to your online business. SMM services include SEO, search engine optimization, social media marketing and digital marketing strategy implementation.</p> <p><b className="highlight">Hiring TZAR VENTURE</b> as your <b className="highlight">Digital marketing Agency</b> has many advantages. We have good proven track record with adequate experience of creating <b className="highlight">niche brand.</b> Also you can get Digital marketing Services at an affordable rates. Thus, you can have TZAR VENTURE as an all rounder Digital Marketing Agency to asist you in promotion of your business in an effective manner that will surely bring success to you.</p>

                  {/* ===================== SEE LESS BUTTON AT BOTTOM ===================== */}
                   <p
                    onClick={() => setShowMore(false)}
                    style={{
                      color: "#003366",
                      fontWeight: "600",
                      cursor: "pointer",
                      marginTop: "20px",
                      display: "inline-block",
                    }}
                  >
                    See Less...
                  </p>

                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeoOurWebsite;
