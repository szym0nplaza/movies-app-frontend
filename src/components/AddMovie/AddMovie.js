import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import fetchData from "../../services/fetchData";

export default function AddMovie() {
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const data = async () => {
      const actor = await fetchData("http://127.0.0.1:8000/api/actors/");
      const director = await fetchData("http://127.0.0.1:8000/api/directors/");
      setActors(actor);
      setDirectors(director);
    };
    data();
  }, []);
  console.log(directors, actors);
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
    >
      <Form.Label style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        <Form.Text>Add movie</Form.Text>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Label>Year of production</Form.Label>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Row>
          <Col>
            <Form.Control placeholder="YYYY" maxLength="4"></Form.Control>
          </Col>
          <Col>
            <Form.Control placeholder="MM" maxLength="2"></Form.Control>
          </Col>
          <Col>
            <Form.Control placeholder="DD" maxLength="2"></Form.Control>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Form.Control as="select">
          <option>Choose director</option>
          {directors.map((director) => {
            return (
              <option
                value={director.id}
              >{`Director: ${director.name}`}</option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form.Group>
      <Form.Group
        controlId="formFileSm"
        className="mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Form.Label>Upload movie image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
