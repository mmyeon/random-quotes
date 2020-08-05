import React from "react";
import "./style/QuoteBox.css";
import TextWrapper from "./TextWrapper";
import ButtonWrapper from "./ButtonWrapper";

const QuoteBox = () => {
  return (
    <div className="quote-box">
      <TextWrapper />
      <ButtonWrapper />
    </div>
  );
};

export default QuoteBox;
