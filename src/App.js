import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Event from "./components/Event";
import Suggest from "./components/Suggest";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://murmuring-hollows-81209.herokuapp.com/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      });
  }, []);

  function addEvent(newEvent) {
    const updatedEvents = [...events, newEvent]
    setEvents(updatedEvents)
  }


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/event" element={<Event events={events} onAddEvent={addEvent}/>} />
        <Route path="/suggest" element={<Suggest onAddEvent={addEvent}/> } />
        <Route exact path="/" element={<Home events={events} />} />
        <Route path="/events/:eventId" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
