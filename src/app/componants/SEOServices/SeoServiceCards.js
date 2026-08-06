import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import Image1 from '@/assets/images/resources/SeoServ/1.png'
import Image2 from '@/assets/images/resources/SeoServ/2.png'
import Image3 from '@/assets/images/resources/SeoServ/3.png'
import Image4 from '@/assets/images/resources/SeoServ/4.png'
import Image5 from '@/assets/images/resources/SeoServ/5.png'
import Image6 from '@/assets/images/resources/SeoServ/6.png'


function SeoServiceCards() {
  return (
    <section className="ServiceSEOContainer">
      {/* <h1 className="titleHeadSEOserv"> Benefits</h1> */}
      <Container>
        <div className="boxContainerMainSEOservnew">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image1.src} alt="" className="SEOservicons" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>Website Analysis</h1>
                    <p>The first thing that we do is the detailed analysis of your website</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image2.src} alt="" className="SEOservicons" />

                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>Keyword Research</h1>
                    <p>Next we do is relevant keyword research for your website</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image3.src} alt="" className="SEOservicons" />

                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>Content Optimization</h1>
                    <p>Then we create optimized and unique content for the audience.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image4.src} alt="" className="SEOservicons" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>Competitor Analysis</h1>
                    <p>Through Competitor Analysis we analyze the industry trends, objectives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image5.src} alt="" className="SEOservicons" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>On Page Optimization</h1>
                    <p>On Page Optimization – It is the important aspect of Search Engine Optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="boxContainerSEOservnew">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <Image src={Image6.src} alt="" className="SEOservicons" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h1>Off Page Optimization</h1>
                    <p>We make strategy for manual Off-page submission for better and authentic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SeoServiceCards
