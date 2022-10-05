import React from "react";
import rotatingGif from "../assets/rotating2.gif";
import { Button, Form } from "react-bootstrap";

function Home() {
  return (
    <div className="main-div">
      <div className="img">
        <img src={rotatingGif} alt="world" />
      </div>
      <div className="content">
        <div className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="display-content">

        </div>
      </div>
    </div>
  );
}

export default Home;
