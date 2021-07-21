import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import postData from "../../services/postData";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const validate = async (e) => {
    e.preventDefault();
    const responseData = await postData("http://127.0.0.1:8000/api/login/", {
      email: email,
      password: password,
    });

    const { token, is_admin } = responseData;
    token ? history.push("/") : <div />;
  };

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
      onSubmit={validate}
    >
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
