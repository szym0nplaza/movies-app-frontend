import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Link } from "react-router-dom";

export default function NavbarPanel() {
  return (
    <div className="navbar-panel">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Movies-App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/actors">
                Actors
              </Nav.Link>
              <Nav.Link as={Link} to="/directors">
                Directors
              </Nav.Link>
              <AdminPanel />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
