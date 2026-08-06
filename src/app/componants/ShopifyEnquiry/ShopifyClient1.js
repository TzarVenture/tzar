import React from "react";
import { Image } from "react-bootstrap";

const ShopifyClient1 = ({ testimonial = {}, listRef }) => {
  const { image } = testimonial;

  return (
    <div
      ref={listRef}
      style={{ userSelect: "none" }}
      className="testimonial-one__singlecard"
    >
      <div className="testimonial-one__contentcard">
      </div>
      <div className="testimonial-one__client-infocard">
        <div className="testimonial-one__client__imgcard">
          <Image
            src={require(`@/assets/images/Brandslogo/${image}`).default.src}
            alt=""
            style={{ width: '140px'}}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopifyClient1;
