import React, { useState } from "react";

const Faq = ({ faqs = [] }) => {
  const [faqActive, setFaqsActive] = useState(1);

  return (
    <div className="accrodion-grp faq-one-accrodion">
      {faqs.map(({ id, title, text }) => (
        <div
          key={id}
          className={`accrodion overflow-hidden${
            faqActive === id ? " active" : ""
          }`}
        >
          <div onClick={() => setFaqsActive(id)} className="accrodion-title">
            <h4>{title}</h4>
          </div>
          <div
            className={`accrodion-content animated ${
              faqActive === id ? "slideInUp d-block" : "slideInDown d-none"
            }`}
          >
            <div className="inner">
              <p>{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
