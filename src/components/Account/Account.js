import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import userContext from "../../context/userContext";
import AlertView from "../AlertView/AlertView";
import { postData, putData, fetchData } from "../../services/client";
import { useHistory } from "react-router-dom";

export default function Account() {
  const { user, userDispatch } = useContext(userContext);
  const [response, setResponse] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isMailSended, setIsMailSended] = useState(false);
  const history = useHistory();

  const validate = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      return null;
    }
    if (password === "") {
      return null;
    }
    const responseData = await putData(
      `http://${process.env.REACT_APP_API_URL}/api/manage-user/${user.id}/`,
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

  const toggleMovies = async () => {
    const response = await fetchData(
      `http://${process.env.REACT_APP_API_URL}/api/toggle-movies/`
    );
    console.log(response);
  };

  const adminCheck = () => {
    if (user === null) {
      return false;
    }
    if (user.is_admin) {
      return (
        <>
          <AlertView type="success" msg="You have admin status!" />
          <Button
            variant="outline-success"
            style={{ width: "100%" }}
            onClick={toggleMovies}
          >
            Get movies
          </Button>
        </>
      );
    }
    if (!user.is_admin) {
      return (
        <Form.Text style={{ fontSize: "1.2rem" }}>
          If you want to be an admin contact with one of our workers by an
          email. They will reply as fast as it's possible.
        </Form.Text>
      );
    }
  };
  const logOutView = async () => {
    const response = await postData(
      `http://${process.env.REACT_APP_API_URL}/api/logout/`,
      {
        email: user.email,
      }
    );
    localStorage.removeItem("user");
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
        <Form.Group>{adminCheck()}</Form.Group>
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
