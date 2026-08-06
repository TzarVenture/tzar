import React from "react";

const Title = ({ title = "", tagline = "", children = "", className = "" }) => {
  return (
    <div className={`section-title ${className}`}>
      {tagline && <span className="section-title__tagline">{tagline}</span>}
      <h2 className="section-title__title">{children || title}</h2>
    </div>
  );
};

export default Title;
