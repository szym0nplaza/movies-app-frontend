import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div>
      <NavDropdown title="Admin Panel" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="manage-users">
          Manage Users
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="manage-movies">
          Manage movies
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="manage-actors">
          Manage actors
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="manage-directors">
          Manage directors
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
