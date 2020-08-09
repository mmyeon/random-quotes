import React from "react";
import "../styles/TextWrapper.css";

const TextWrapper = ({ quote, author, backgroundColor }) => {
  return (
    <div className="text-wrapper" style={{ color: backgroundColor }}>
      <div className="text">
        <i className="fas fa-quote-left quote-icon"></i>
        {quote}
      </div>
      <span className="author">{author}</span>
    </div>
  );
};

export default TextWrapper;
