import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
      <Form.Label
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Form.Text>Register</Form.Text>
      </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Reapeat password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repeat password"
          onChange={(event) => setPassword2(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="i agree with terms and conditions which doesn't exist"
        />
      </Form.Group>
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
