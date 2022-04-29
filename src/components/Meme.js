import React, { useState } from "react";
import buttonImage from "../images/meme.png";
import memesData from "../data/memesData.js";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState({ memesData });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[randomNumber].url;
    setMeme((prevValue) => {
      return { ...prevValue, randomImage: memeUrl };
    });
  }

  return (
    <div action="" className="memeGenerator">
      <input
        type="text"
        className="meme__input"
        id="firstLine"
        placeholder={meme.topText}
      />
      <input
        type="text"
        className="meme__input"
        id="secondLine"
        placeholder={meme.bottomText}
      />
      <button type="submit" className="meme__button" onClick={getMemeImage}>
        Get a new meme image
        <img src={buttonImage} alt="" className="button__image" />{" "}
      </button>

      <img src={meme.randomImage} alt="Meme" className="meme__image" />
    </div>
  );
}

export default Meme;
