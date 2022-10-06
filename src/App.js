import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Events from "./components/Events";
import Suggest from "./components/Suggest";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
