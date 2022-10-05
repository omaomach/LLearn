import React from "react";
import rotatingGif from "../assets/rotating2.gif"

function Home() {

    return (
        <div className="main">
            <div className="img">
                <img src={rotatingGif} alt="world"/>
            </div>
        </div>
    )

}

export default Home