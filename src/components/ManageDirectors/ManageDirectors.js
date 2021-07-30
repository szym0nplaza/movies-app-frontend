import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData } from "../../services/client";

export default function ManageDirectors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    const data = async () => {
      const director = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/directors/`
      );
      setDirectors(director);
    };
    data();
  }, []);
  return (
    <Container style={{ width: "25rem", margin: "2rem auto" }}>
      <ListGroup style={{ marginBottom: "1rem" }}>
        <Button variant="success" as={Link} to="/add-director">
          Add Director +
        </Button>
      </ListGroup>
      <ListGroup defaultActiveKey="#link3">
        {directors.map((director) => (
          <ListGroup.Item
            action
            key={director.id}
            as={Link}
            to={`/director-settings/${director.id}`}
          >
            {director.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
