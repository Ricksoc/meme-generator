import React from "react";
import Navbar from "./Navbar";
import Meme from "./Meme";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <Meme />
      </div>
    </div>
  );
}

export default App;
