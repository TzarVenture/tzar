import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial1 = ({ testimonial = {}, listRef }) => {
  const { image } = testimonial;

  return (
    <div
      ref={listRef}
      className="testimonial-one__singlecard"
      style={{
        userSelect: "none",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10%", // Adds responsive spacing around image
        boxSizing: "border-box",
      }}
    >
      <Image
        src={require(`@/assets/images/testimonial/${image}`).default.src}
        alt=""
        fluid // ✅ Bootstrap prop: makes image responsive automatically
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          height: "auto",
          width: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default SingleTestimonial1;
