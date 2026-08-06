import React from 'react'
import { Container,Col, Row, Image } from 'react-bootstrap'
import imgtxtsecseo from "@/app/data/imgtxtsecseo"
import Link from "next/link";
import Title from "@/app/componants/Reuseable/Title";

const { images, badge, why,  tagline, title, text1, text2,text3,text4, text5, text6, text7 } = imgtxtsecseo;

function ImgTxtSecSeo() {
  return (
    <>
 <section className="ImgTxtSecSeo-pagenew">
      <Container>
      <Row>
           <Col xl={12}>
           <div className="ImgTxtSecSeoinfonew-para">
            <p className="ImgTxtSecSeoinfonew">{text5}</p> 
               <p className="ImgTxtSecSeoinfonew">{text6}</p> 
               <p className="ImgTxtSecSeoinfonew">{text7}</p> 
           </div>
               
           </Col> 
         </Row>
        <Row>
           <Col xl={12}>
               <h1>{why}</h1> 
           </Col> 
         </Row>
         <Row>  
          <Col xl={4}>
          <div className="ImgTxtSecSeo__leftnew">
              <ul className="list-unstyled ImgTxtSecSeo__imagesnew">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`ImgTxtSecSeo__img-${i + 1}`}>
                      <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={8}>
          <div className="ImgTxtSecSeo__rightnew">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="ImgTxtSecSeo__right-text-12">{text1}</p>
              <p className="ImgTxtSecSeo__right-text-13">{text3}</p>
              <p className="ImgTxtSecSeo__right-text-14">{text4}</p>

              <h4 className="ImgTxtSecSeo__right-text-2">{text2}</h4>
              <Link href="#Contactform" className="thm-btn ImgTxtSecSeo__btn">
                Enquiry Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default ImgTxtSecSeo
