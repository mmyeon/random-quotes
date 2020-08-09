import React from "react";
import "../styles/QuoteBox.css";
import Text from "./Text";
import Button from "./Button";

const QuoteBox = ({ quote, author, handleClick, backgroundColor }) => {
  return (
    <div className="quote-box">
      <Text quote={quote} author={author} backgroundColor={backgroundColor} />
      <Button handleClick={handleClick} backgroundColor={backgroundColor} />
    </div>
  );
};

export default QuoteBox;
