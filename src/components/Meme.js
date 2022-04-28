import React, { useState } from "react";
import buttonImage from "../images/meme.png";
import memesData from "../data/memesData.js";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[randomNumber].url;
    setMemeImage(memeUrl);
  }

  return (
    <div className="meme">
      <div action="" className="memeGenerator">
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
        <button type="submit" className="meme__button" onClick={getMemeImage}>
          Get a new meme image
          <img src={buttonImage} alt="" className="button__image" />{" "}
        </button>

        <img src={memeImage} alt="Meme" className="meme__image" />
      </div>
    </div>
  );
}

export default Meme;
