import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import deleteData from "../../services/deleteData";
import fetchData from "../../services/fetchData";
import AlertView from "../AlertView/AlertView";

export default function ManageUsers() {
  const { slug } = useParams();
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(async () => {
    const response = await fetchData(
      `http://127.0.0.1:8000/api/user-details/${slug}/`
    );
    setUser(response);
  }, []);

  if (user === null) {
    return (
      <Spinner
        animation="border"
        variant="info"
        style={{ display: "block", margin: "10rem auto" }}
      />
    );
  }
  let { email, is_admin, is_logged } = user;
  is_admin ? (is_admin = "True") : (is_admin = "False");
  is_logged ? (is_logged = "True") : (is_logged = "False");

  const deleteUser = async () => {
    const response = await deleteData(
      `http://127.0.0.1:8000/api/manage-user/${slug}/`
    );
    setStatus(response);
  };

  if (status !== null) {
    return (
      <Alert variant="success" style={{ width: "40rem", margin: "2rem auto" }}>
        {" "}
        {status}
      </Alert>
    );
  }

  return (
    <Card style={{ width: "35rem", margin: "3rem auto" }}>
      <Card.Header as="h5">{email}</Card.Header>
      <Card.Body>
        <Card.Text>
          Admin status: <b>{is_admin}</b>
        </Card.Text>
        <Card.Text>
          Is logged in: <b>{is_logged}</b>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outline-info" as={Link} to="/manage-users">
          Go back
        </Button>
        <Button variant="outline-danger" onClick={deleteUser}>
          DELETE USER
        </Button>
      </Card.Footer>
    </Card>
  );
}
