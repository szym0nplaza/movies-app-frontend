import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchData } from "../../services/client";
import ActorCard from "../ActorCard/ActorCard";

export default function ActorsGrid() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const data = async () => {
      const actor = await fetchData("http://127.0.0.1:8000/api/actors/");
      setActors(actor);
    };
    data();
  }, []);
  return (
    <Container fluid="md">
      <Row>
        {actors.map((actor, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <ActorCard person={actor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
