import React from "react";
import rotatingGif from "../assets/rotating2.gif";
import Search from "./Search";

function Home() {
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <Search />
        <div className="display-content">

        </div>
      </div>
    </div>
  );
}

export default Home;
