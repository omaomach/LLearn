import React from "react";
import rotatingGif from "../assets/rotating2.gif";

function Suggest() {
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <div className="display-content"></div>
      </div>
    </div>
  );
}

export default Suggest;
