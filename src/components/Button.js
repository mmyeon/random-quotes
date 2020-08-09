import React from "react";
import "../styles/ButtonWrapper.css";

const ButtonWrapper = ({ handleClick, backgroundColor }) => {
  function buttonClick() {
    handleClick();
  }

  return (
    <div className="button-wrapper">
      <div className="sns-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper"
          title="Tweet this quote!"
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20person%20who%20says%20it%20cannot%20be%20done%20should%20not%20interrupt%20the%20person%20who%20is%20doing%20it.%22%20Chinese%20Proverb"
          style={{ background: backgroundColor }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper"
          title="Post this quote in the tumblr!"
          href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DChinese%2BProverb%26content%3DThe%2Bperson%2Bwho%2Bsays%2Bit%2Bcannot%2Bbe%2Bdone%2Bshould%2Bnot%2Binterrupt%2Bthe%2Bperson%2Bwho%2Bis%2Bdoing%2Bit.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
          style={{ background: backgroundColor }}
        >
          <i className="fab fa-tumblr"></i>
        </a>
      </div>
      <div
        className="new-quote"
        onClick={buttonClick}
        style={{ background: backgroundColor }}
      >
        New quote
      </div>
    </div>
  );
};

export default ButtonWrapper;
