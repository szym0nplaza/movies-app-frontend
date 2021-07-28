import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { deleteData, fetchData, putData } from "../../services/client";

export default function ActorSettings() {
  const { slug } = useParams();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(async () => {
    const responseData = await fetchData(
      `http://127.0.0.1:8000/api/actor-details/${slug}/`
    );
    setResponse(responseData);
  }, []);

  useEffect(() => {
    if (response === null) return;
    setName(response.actor_info.name);
    setDate(response.actor_info.date_of_birth);
    setImage(response.actor_info.image);
  }, [response]);

  if (isDeleted) {
    return (
      <Alert variant="danger" style={{ width: "35rem", margin: "2rem auto" }}>
        Actor <b>{name}</b> deleted successfully.
      </Alert>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await putData(
      `http://127.0.0.1:8000/api/manage-actor/${slug}/`,
      {
        name: name,
        date_of_birth: date,
      }
    );
    setIsUpdated(true);
  };

  const handleSuccess = () => {
    if (isUpdated) {
      return <Alert variant="success">Actor data updated successfully!</Alert>;
    }
  };

  const deleteActor = async () => {
    const responseData = await deleteData(
      `http://127.0.0.1:8000/api/manage-actor/${slug}/`
    );
    setIsDeleted(true);
  };

  return (
    <Form
      style={{
        width: "40rem",
        border: "2px solid rgb(206, 212, 218)",
        borderRadius: "6px",
        padding: "1.2rem 1rem",
        margin: "3rem auto ",
      }}
      onSubmit={handleSubmit}
    >
      {handleSuccess()}
      <Form.Label style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        <Form.Text>Update actor</Form.Text>
      </Form.Label>
      <Form.Group
        controlId="formFileSm"
        className="mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={`http://127.0.0.1:8000${image}/`}
          style={{ marginBottom: "1rem" }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Date of birth</Form.Label>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Form.Control
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        ></Form.Control>
      </Form.Group>
      <Button
        variant="warning"
        type="submit"
        style={{ width: "100%", color: "white", marginBottom: "0.5rem" }}
      >
        Update actor
      </Button>
      <Button
        variant="danger"
        onClick={deleteActor}
        style={{ width: "100%", color: "white" }}
      >
        Delete actor
      </Button>
    </Form>
  );
}
