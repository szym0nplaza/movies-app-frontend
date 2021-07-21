import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Form
      style={{
        width: "40rem",
        border: "2px solid rgb(206, 212, 218)",
        borderRadius: "6px",
        margin: "auto",
        padding: "1.2rem 1rem",
        marginTop: "3rem",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Label style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
        Don't have account?{" "}
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "rgb(13, 202, 240)" }}
        >
          Sing In
        </Link>
      </Form.Label>
      <Button
        variant="info"
        style={{ color: "white", width: "100%", marginTop: "1rem" }}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
