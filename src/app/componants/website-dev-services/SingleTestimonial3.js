import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial3 = ({ testimonial = {}, listRef }) => {
  const { image } = testimonial;

  return (
    <div
      ref={listRef}
      style={{ userSelect: "none" }}
      className="testimonial-one__singlecard"
    >
      <div className="testimonial-one__contentcard">
        {/* <p className="testimonial-one__textcard">{text}</p> */}
      </div>
      <div className="testimonial-one__client-infocard">
        <div className="testimonial-one__client__imgcard">
          <Image
            src={(`/FED/${image}`).default.src}
            alt=""
        
          />
        </div>
        {/* <h4 className="testimonial-one__namecard">{name}</h4>
        <p className="testimonial-one__titlecard">{title}</p> */}
      </div>
    </div>
  );
};

export default SingleTestimonial3;
