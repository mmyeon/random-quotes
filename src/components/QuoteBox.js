import React from "react";
import "./style/QuoteBox.css";
import Text from "./Text";
import Button from "./Button";

const QuoteBox = (props) => {
  // TODO: props 비구조화 할당으로 받기
  const quote = props.quote;
  const author = props.author;
  const handleClick = props.handleClick;
  const backgroundColor = props.backgroundColor;

  return (
    <div className="quote-box">
      {/* TODO: 아래 컴포넌트 두개 QuoteBox폴더 내부로 넣기 */}
      {/* TODO: style 폴더 위치 옮기기 */}
      <Text quote={quote} author={author} backgroundColor={backgroundColor} />
      <Button handleClick={handleClick} backgroundColor={backgroundColor} />
    </div>
  );
};

export default QuoteBox;
