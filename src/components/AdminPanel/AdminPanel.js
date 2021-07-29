import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import userContext from "../../context/userContext";

export default function AdminPanel() {
  const { user } = useContext(userContext);
  const checkAdmin = () => {
    if (user.is_admin) {
      return (
        <NavDropdown.Item as={Link} to="/manage-users">
          Manage users
        </NavDropdown.Item>
      );
    }
  };

  return (
    <div>
      <NavDropdown title="Admin Panel" id="collasible-nav-dropdown">
        {checkAdmin()}
        <NavDropdown.Item as={Link} to="/manage-movies">
          Manage movies
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/manage-actors">
          Manage actors
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/manage-directors">
          Manage directors
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
