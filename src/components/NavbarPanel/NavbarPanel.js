import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Link } from "react-router-dom";
import LoginRegisterButton from "../LoginRegisterButton/LoginRegisterButton";

export default function NavbarPanel() {
  const is_admin = true;
  const token = false;
  return (
    <div className="navbar-panel">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Image src="/icons/cinema.svg" style={{ marginRight: "30px" }} />
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
              {is_admin ? <AdminPanel /> : <div />}
            </Nav>
            <Nav>{token ? <div /> : <LoginRegisterButton />}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
