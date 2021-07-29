import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar sticky="bottom" style={{ backgroundColor: "#212529" }}>
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text style={{ color: "white" }}>Movies-App Ⓒ</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
