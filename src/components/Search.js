import React from "react";
import { Button, Form } from "react-bootstrap";

function Search() {
    return (
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
    )
}

export default Search