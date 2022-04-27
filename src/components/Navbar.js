import React from "react";
import face from "../images/troll-face.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <img className="navbar__image" src={face} alt="" />
        <h3 className="navbar__title">Meme Generator</h3>
        <h5 className="navbar__description">React Course - Project 3</h5>
      </div>
    </header>
  );
}

export default Navbar;
