import React from "react";
import rotatingGif from "../assets/rotating2.gif";

function Home() {
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <div className="search">

        </div>
        <div className="displayContent">
            
        </div>
      </div>
    </div>
  );
}

export default Home;
