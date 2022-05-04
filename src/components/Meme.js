import React, { useState } from "react";
import buttonImage from "../images/meme.png";
import memesData from "../data/memesData.js";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[randomNumber].url;
    setMeme((prevValue) => ({
      ...prevValue,
      randomImage: memeUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  console.log(meme);

  return (
    <div action="" className="memeGenerator">
      <input
        type="text"
        className="meme__input"
        id="firstLine"
        placeholder="Top Line"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        className="meme__input"
        id="secondLine"
        placeholder="Bottom Line"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      />
      <button type="submit" className="meme__button" onClick={getMemeImage}>
        Get a new meme image
        <img src={buttonImage} alt="" className="button__image" />{" "}
      </button>

      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme__image" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
