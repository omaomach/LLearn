import React from "react";
import Search from "./Search";

function Events() {

  return (
    <div className="main-div2">
      <div className="left-content">
        <Search />
        <div className="event-list">
        </div>
      </div>
      <div className="right-content">
        <div className="event-image">

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
            ></input>{" "}
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
