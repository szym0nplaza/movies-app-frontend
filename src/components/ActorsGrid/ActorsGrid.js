import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonCard from "../PersonCard/PersonCard";

export default function ActorsGrid() {
  const actors = [];
  return (
    <Container fluid="md">
      <Row>
        {actors.map((actor) => (
          <Col lg={4} md={6} sm={12}>
            <PersonCard person={actor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
