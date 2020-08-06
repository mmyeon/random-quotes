import React from "react";
import "./style/TextWrapper.css";

const TextWrapper = (props) => {
  const quote = props.quote;
  const author = props.author;
  const backgroundColor = props.backgroundColor;

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
