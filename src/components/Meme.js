import React from "react";
import buttonImage from "../images/meme.png";

function Meme() {
  return (
    <div className="meme">
      <form action="" className="memeGenerator">
        <input
          type="text"
          className="meme__input"
          id="firstLine"
          placeholder="Top Line"
        />
        <input
          type="text"
          className="meme__input"
          id="secondLine"
          placeholder="Bottom Line"
        />
        <button type="submit" className="meme__button">
          Get a new meme image
          <img src={buttonImage} alt="" className="button__image" />{" "}
        </button>
      </form>
    </div>
  );
}

export default Meme;
