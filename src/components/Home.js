import React, { useEffect, useState } from "react";
import rotatingGif from "../assets/rotating2.gif";
import Events from "./Events";
import Search from "./Search";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      });
  }, []);

  console.log(events)

  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <Search />
        <div className="display-event-content">
          {events.map((event) => (
            // console.log(event.image)
            <div key={event.id} className="event-card">
            
              <div className="home-event-image">
                <img src={event.image} alt="event image" />
              </div>
              <div className="home-event-details">
                <div className="event-name">
                  {event.name}
                </div>
                <div className="event-venue">
                  {event.venue}
                </div>
                <div className="event-date">
                  {event.date}
                </div>
              </div>
              {/* <div className="event-attendees">

              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
