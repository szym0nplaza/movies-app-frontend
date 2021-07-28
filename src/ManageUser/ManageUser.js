import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import userContext from "../../context/userContext";
import AlertView from "../AlertView/AlertView";
import { putData } from "../../services/client";
import { postData } from "../../services/client";
import { useHistory } from "react-router-dom";

export default function ManageUser() {
  const { user, userDispatch } = useContext(userContext);
  const [response, setResponse] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory();

  const validate = async (e) => {
    e.preventDefault();
    // if (!checkbox) {
    //   return null;
    // }
    if (password !== password2) {
      return null;
    }
    if (password === "") {
      return null;
    }
    const responseData = await putData(
      `http://127.0.0.1:8000/api/manage-user/${user.id}/`,
      {
        email: user.email,
        password: password,
      }
    );
    setResponse(responseData);
  };

  const checkPass = () => {
    if (password2 === "" || password === "") {
      return null;
    }
    if (password !== password2) {
      return <AlertView type="warning" msg="Passwords does not match!" />;
    }
  };
  const responseInfo = () => {
    if (response === "Changed.") {
      return <AlertView type="success" msg="Password changed successfully!" />;
    }
    if (response === "Invalid data.") {
      return <AlertView type="danger" msg="Invalid data provided!" />;
    }
  };

  const adminCheck = () => {
    if (user === null) {
      return false;
    }
    if (user.is_admin) {
      return <AlertView type="success" msg="You have admin status!" />;
    }
    if (!user.is_admin) {
      return (
        <Form.Check label="Select if you want to be admin. We will send email to owner and reply as fast as it is possible" />
      );
    }
  };

  const logOutView = async () => {
    const response = await postData("http://127.0.0.1:8000/api/logout/", {
      email: user.email,
    });
    if (response === "Logget out.") {
      history.push("/");
      userDispatch({ type: "DELETE_USER" });
    }
  };

  return (
    <Form
      style={{
        width: "40rem",
        border: "2px solid rgb(206, 212, 218)",
        borderRadius: "6px",
        margin: "auto",
        padding: "1.2rem 1rem",
        margin: "3rem auto",
      }}
      onSubmit={validate}
    >
      {checkPass()}
      {responseInfo()}
      <Form.Label style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        <Form.Text>Account settings</Form.Text>
      </Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly type="email" value={user.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New password</Form.Label>
        <Form.Control
          type="password"
          placeholder="New password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat new password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repeat new password"
          onChange={(event) => setPassword2(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontSize: "1.4rem", marginTop: "1rem" }}>
          Admin status
        </Form.Label>
        {adminCheck()}
      </Form.Group>
      <Button
        variant="warning"
        type="submit"
        style={{ color: "white", width: "100%", marginTop: "1rem" }}
      >
        Update
      </Button>
      <Button
        variant="outline-danger"
        style={{ width: "100%", marginTop: "1rem" }}
        onClick={logOutView}
      >
        Log Out
      </Button>
    </Form>
  );
}
