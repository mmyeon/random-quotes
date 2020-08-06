import React, { useState, useEffect } from "react";
import QuoteBox from "../components/QuoteBox";
import "../styles/RandomQuote.css";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getNewQuote();
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
    getNewQuote();
  }

  function getNewQuote() {
    const req = new XMLHttpRequest();
    const url = "https://api.quotable.io/random";
    let json;
    req.open("GET", url, true);
    req.send();
    req.onload = function () {
      json = JSON.parse(req.responseText);
      setQuote(json.content);
      setAuthor(json.author);
    };
  }
};

export default RandomQuote;
