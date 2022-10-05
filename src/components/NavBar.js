import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div className="navigation">
      <Navbar className="navigation-bar" collapseOnSelect expand="lg" variant="dark">
        <Container className="navigation-conatiner">
          <Navbar.Brand href="#home">LLearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#suggest">Suggest</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
