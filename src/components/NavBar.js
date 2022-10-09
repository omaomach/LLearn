import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div className="navigation">
      <Navbar className="navigation-bar" collapseOnSelect expand="lg" variant="dark">
        <Container className="navigation-conatiner">
          <NavLink to="/"><h3>LLearn</h3></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/suggest">Suggest Event</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/logout">Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
