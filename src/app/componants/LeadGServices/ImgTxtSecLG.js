import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import imgtxtseclg from '@/app/data/imgtxtseclg';
import Title from '../Reuseable/Title';

const {
  images,
  tagline,
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
} = imgtxtseclg;

function ImgTxtSecLG() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* IMAGE COLUMN */}
          <Col
            xl={4}
            lg={5}
            md={12}
            className="d-flex justify-content-center mb-4 mb-lg-0"
          >
            <ul className="list-unstyled m-0 d-flex flex-column align-items-center">
              {images.map((image, i) => (
                <li key={i} className="mb-3">
                  <Image
                    src={require(`@/assets/images/resources/${image}`).default.src}
                    alt=""
                    className="img-fluid"
                  />
                </li>
              ))}
            </ul>
          </Col>

          {/* TEXT COLUMN */}
          <Col xl={8} lg={7} md={12}>
            <div>
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="mb-3">{text1}</p>
              <p className="mb-3">{text3}</p>
              <p className="mb-3">{text4}</p>
              <p className="mb-3">{text5}</p>
              <h4 className="mt-4">{text2}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ImgTxtSecLG;
