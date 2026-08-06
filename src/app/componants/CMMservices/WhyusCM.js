import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import whyusCM from '@/app/data/whyusCM';
import VisibilityCountUp from '../CMMservices/VisibilityCountUp';


const { count4, count3, count2, count1, HeadTitle, WCHTxt1, WCHTxt2, WCHTxt3, WCHTxt4, WCUH1, WCUH2, WCUH3, WCUH4, title10, subtitle6, subtitle7, subtitle8,
  subtitle9, subtitle10, tagline, ppcmgmt } = whyusCM;

function WhyusCM() {
  return (
    <>
      <section className="WhyUsLogo-page">
        <div className="container">
          <h1>{HeadTitle}</h1>
          <div className="CardConatinerWU1">
            <div className='row'>
              <div className='col-lg-3'>
                <div className="BoxWU1">
                  <div className="BigCircle1">
                    <div className="small-circle"></div>
                  </div>
                  <h2 className="odometer">
                    <VisibilityCountUp count={count1} />
                  
                  </h2>
                  <p>Awards</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="BoxWU1">
                  <div className="BigCircle1">
                    <div className="small-circle"></div>
                  </div>
                  <h2 className="odometer">
                    <VisibilityCountUp count={count2} />
                  </h2>
                  <p>clients</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="BoxWU1">
                  <div className="BigCircle1">
                    <div className="small-circle"></div>
                  </div>
                  <h2 className="odometer">
                    <VisibilityCountUp count={count3} />
                  </h2>
                  <p>in Business</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="BoxWU1">
                  <div className="BigCircle1">
                    <div className="small-circle"></div>
                  </div>
                  <h2 className="odometer">
                    <VisibilityCountUp count={count4} />
                  </h2>
                  <p>repeat sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyusCM
