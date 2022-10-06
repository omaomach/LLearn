import React from "react";
import { Button, Form } from "react-bootstrap";

function Search({ search, onSearchEvent }) {
    return (
        <div className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={search}
              className="me-2"
              aria-label="Search"
              onChange={(event) => onSearchEvent(event.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
    )
}

export default Search