import React, { useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";

const sliderId = (Math.random() * 100).toString().split(".").join("");

const TinySlider4 = ({ children, listRef, options = {} }) => {
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (!slider) {
      setSlider(tns({ ...options, container: `.my-slider-${sliderId}` }));
    }
  }, [slider, listRef, options]);

  return <div className={`my-slider-${sliderId}`}>{children}</div>;
};

export default TinySlider4;
