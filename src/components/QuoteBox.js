import React from "react";
import "./style/QuoteBox.css";
import TextWrapper from "./TextWrapper";
import ButtonWrapper from "./ButtonWrapper";

const QuoteBox = (props) => {
  const quote = props.quote;
  const author = props.author;
  const handleClick = props.handleClick;
  const backgroundColor = props.backgroundColor;

  return (
    <div className="quote-box">
      <TextWrapper
        quote={quote}
        author={author}
        backgroundColor={backgroundColor}
      />
      <ButtonWrapper
        handleClick={handleClick}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default QuoteBox;
