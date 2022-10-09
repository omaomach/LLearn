import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rotatingGif from "../assets/rotating2.gif";
import Search from "./Search";

function Home({ events }) {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function searchEvent(newSearch) {
    setSearch(newSearch)
  }

  const filteredEvents = events.filter((evt) => {
    let result = evt.name.toLowerCase().includes(search)
    return result
  })

  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <Search search={search} onSearchEvent={searchEvent}/>
        <div className="display-event-content">
          {filteredEvents.map((event) => (
            // console.log(event.image)
            <div key={event.id} className="event-card">
            
              <div className="home-event-image">
                <img src={event.image} alt="eventimage" />
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
                <button className="delete-button" onClick={() => navigate("/events")}>Register for Event</button>
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
