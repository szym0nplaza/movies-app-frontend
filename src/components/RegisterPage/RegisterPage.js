import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postData } from "../../services/client";
import AlertView from "../AlertView/AlertView";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [resposne, setResposne] = useState(null);
  const [checkbox, setCheckbox] = useState(true);
  const [empty, setEmpty] = useState(false);

  const validate = async (e) => {
    e.preventDefault();
    if (!checkbox) {
      return null;
    }
    if (password === "" && email === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    const responseData = await postData(
      `http://${process.env.REACT_APP_API_URL}/api/register/`,
      {
        email: email,
        password: password,
        password2: password2,
      }
    );
    console.log(responseData);
    setResposne(responseData);
  };

  const checkPass = () => {
    if (password2 === "") {
      return null;
    }
    if (password !== password2) {
      return <AlertView type="warning" msg="Passwords does not match!" />;
    }
  };

  const registerInfo = () => {
    if (resposne === "Registered.") {
      return (
        <Alert variant="success">
          Account created successfully! Now you can{" "}
          <Alert.Link as={Link} to="/login">
            Log in
          </Alert.Link>
        </Alert>
      );
    }
    if (resposne === "Invalid data." && empty === false) {
      return <AlertView type="danger" msg="User with given email exists!" />;
    }
    if (!checkbox) {
      return <AlertView type="danger" msg="Accept terms and contitions!" />;
    }
  };

  return (
    <Form
      onSubmit={validate}
      style={{
        width: "40rem",
        border: "2px solid rgb(206, 212, 218)",
        borderRadius: "6px",
        margin: "auto",
        padding: "1.2rem 1rem",
        marginTop: "3rem",
      }}
    >
      {checkPass()}
      {registerInfo()}
      {empty ? <AlertView type="danger" msg="Fill in register form!" /> : null}
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
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repeat password"
          onChange={(event) => setPassword2(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          checked={checkbox}
          type="checkbox"
          label="i agree with terms and conditions which doesn't exist"
          onChange={() => setCheckbox(!checkbox)}
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
