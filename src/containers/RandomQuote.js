import React, { useState, useEffect } from "react";
import QuoteBox from "../components/QuoteBox";
import "../styles/RandomQuote.css";
import { getNewQuote } from "../api";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    changeState();
  }, []);

  // TODO:클릭하면 배경 랜덤으로 바꾸기
  let backgroundColor = "red";

  return (
    <div className="random-quote" style={{ background: backgroundColor }}>
      <QuoteBox
        quote={quote}
        author={author}
        handleClick={handleClick}
        backgroundColor={backgroundColor}
      />
    </div>
  );

  function handleClick() {
    changeState();
  }

  function changeState() {
    const callback = (json) => {
      setQuote(json.content);
      setAuthor(json.author);
    };
    getNewQuote(callback);
  }

  // function getRandomBackgroundColor (){
  //   let hue;
  //   let saturation ="70%";
  //   let lightness = "80%"
  //   const color = {

  //   }
  // }
};

export default RandomQuote;
