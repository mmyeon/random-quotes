import React, { useState } from "react";
import QuoteBox from "./QuoteBox";
import "./style/RandomQuote.css";

const RandomQuote = () => {
  const req = new XMLHttpRequest();
  const url = "https://api.quotable.io/random";
  let json;
  req.open("GET", url, true);
  req.send();
  req.onload = function () {
    json = JSON.parse(req.responseText);
    console.log(json);
  };

  // const randomQoute = json.content;
  // TODO:블록스코프이기 때문인가 json을 읽을 수 없나.(undefined)
  console.log(json);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // TODO: useEffect로 마운트됐을 때 해야하나..
  // useEffect(() => {
  //   setQuote("hi");
  //   setAuthor("wow");
  //   return () => {};
  // }, []);

  function handleClick() {
    setQuote(json.content);
    setAuthor(json.author);
  }
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
};

export default RandomQuote;
