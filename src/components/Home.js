import React, { useEffect, useState } from "react";
import rotatingGif from "../assets/rotating2.gif";
import Search from "./Search";

function Home() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then((res) => res.json())
    .then((data) => {
      setEvents(data)
    })
  }, [])

  const event = events.map((evt) => (
    {evt}
  ))
  console.log(event)
  
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <Search />
        <div className="display-content">
        <div className="event-image">
          
        </div>
        <div className="event-details">
          <div className="event-name">
          </div>
          <div className="event-venue">

          </div>
        </div>
        <div className="event-attendees">

        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
