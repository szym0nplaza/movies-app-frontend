import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchData from "../../services/fetchData";

export default function ManageActors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const data = async () => {
      const actor = await fetchData("http://127.0.0.1:8000/api/actors/");
      setActors(actor);
    };
    data();
  }, []);
  return (
    <Container style={{ width: "25rem", margin: "2rem auto" }}>
      <ListGroup style={{ marginBottom: "1rem" }}>
        <Button variant="success" as={Link} to="/add-actor">
          Add Actor +
        </Button>
      </ListGroup>
      <ListGroup defaultActiveKey="#link3">
        {actors.map((actor) => (
          <ListGroup.Item
            action
            key={actor.id}
            as={Link}
            to={`/actor-settings/${actor.id}`}
          >
            {actor.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
