import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import postFormData from "../../services/postFormData";

export default function AddActor() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("date_of_birth", date);
    formData.append("image", image);

    const responseData = await postFormData(
      "http://127.0.0.1:8000/api/add-actor/",
      formData
    );
    setResponse(responseData);
  };

  const handleSuccess = () => {
    if (response === "Passed.") {
      return <Alert variant="success">Actor added successfully!</Alert>;
    }
    if (response === "Invalid data.") {
      return <Alert variant="danger">Invalid data</Alert>;
    }
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
        <Form.Text>Add actor</Form.Text>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
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
        ></Form.Control>
      </Form.Group>
      <Form.Group
        controlId="formFileSm"
        className="mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Form.Label>Upload actor image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </Form.Group>
      <Button
        variant="info"
        type="submit"
        style={{ width: "100%", color: "white" }}
      >
        Add actor
      </Button>
    </Form>
  );
}
