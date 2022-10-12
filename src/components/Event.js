import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "./Search";

function Events() { 
  const [eventDetails, setEventDetails] = useState({})
  let { eventId } = useParams()
  // console.log(eventId)

  const listStyle = {
    cursor: "pointer",
    listStyle: "none",
    fontSize: "20px"
  }

  useEffect(() => {
    fetch(`https://murmuring-hollows-81209.herokuapp.com/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEventDetails({
          ...data
        })
        // console.log(data);
      });
  }, []);

  // console.log(eventDetails)

  return (
    <div className="main-div2">
      <div className="left-content">
        <Search />
        <div className="event-list">
          <ul>

            {Object.keys(eventDetails).length > 0 ? eventDetails.users.map((user) => (
              <li key={user.id} style={listStyle}>{user.firstName} {user.lastName}</li>
              // console.log(event)
            )) : console.log("Hello")}
          </ul>
        </div>
      </div>
      <div className="right-content">
        <div className="event-image">
          <img src={eventDetails.image} alt="eventImage" />
        </div>
        <div className="event-details-1">
          <div className="event-name">

          </div>
          <div className="event-venue">

          </div>
        </div>
        <div className="event-details-2">
          <div className="event-name"></div>
          <div className="event-venue"></div>
        </div>
        <div className="registration-form">
          <form className="form-registration">
            <input type="text" placeholder="First Name" required></input> <br />
            <input type="text" placeholder="Last Name" required></input> <br />
            <input
              type="number"
              placeholder="Phone Number"
              required
            ></input>
            <br />
            <input type="text" placeholder="Your Image" required></input> <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Events;
