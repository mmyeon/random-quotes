import React from "react";
import "./style/TextWrapper.css";

const TextWrapper = () => {
  return (
    <div className="text-wrapper">
      <div className="text">
        <i className="fas fa-quote-left quote-icon"></i>
        The mind is everything. What you think you become.
      </div>
      <span className="author">- Buddha</span>
    </div>
  );
};

export default TextWrapper;
