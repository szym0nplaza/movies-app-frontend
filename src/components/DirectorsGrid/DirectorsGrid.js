import React from "react";
import PersonCard from "../PersonCard/PersonCard";
import { Container, Col, Row } from "react-bootstrap";

export default function DirectorsGrid() {
  const directors = [];

  return (
    <Container fluid="md">
      <Row>
        {directors.map((director) => (
          <Col lg={4} md={6} sm={12}>
            <PersonCard person={director} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
