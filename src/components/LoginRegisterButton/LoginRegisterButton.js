import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginRegisterButton.css";

export default function LoginRegisterButton() {
  return (
    <Navbar.Text className="nav-login-register">
      <Link to="/login" className="login-register">
        Login/Register
      </Link>
    </Navbar.Text>
  );
}
