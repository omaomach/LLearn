import React from "react";
import rotatingGif from "../assets/rotating2.gif";

function Suggest() {
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="suggest-content">
        <div className="event-form">
          <form className="form-event">
            <input type="text" placeholder="Event Image" required></input> <br />
            <input type="text" placeholder="Event Name" required></input> <br />
            <input
              type="date"
              placeholder="Event Date"
              required
            ></input>{" "}
            <br />
            <input type="number" placeholder="Event Count" required></input> <br />
            <button type="submit">Suggest Event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Suggest;
