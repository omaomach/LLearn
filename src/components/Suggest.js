import React, { useState } from "react";
import rotatingGif from "../assets/rotating2.gif";

function Suggest({onAddEvent}) {

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    date: "",
    count: ""
  })

  function handleChange(event) {
    const key = event.target.id
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => onAddEvent(data))
  }

  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="suggest-content">
        <div className="event-form">
          <form className="form-event" onSubmit={handleSubmit}>
            <input type="text" id="image" placeholder="Event Image" onChange={handleChange} required></input> <br />
            <input type="text" id="name" placeholder="Event Name" onChange={handleChange} required></input> <br />
            <input type="date" id="date"  placeholder="Event Date" onChange={handleChange} required></input>
            <br />
            <input type="number" placeholder="Event Count" onChange={handleChange} required></input> <br />
            <button type="submit">Suggest Event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Suggest;
