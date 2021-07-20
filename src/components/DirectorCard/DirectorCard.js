import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DirectorCard({
  person: { id, name, image, date_of_birth },
}) {
  return (
    <Card style={{ margin: "10px 0" }}>
      <Card.Img
        variant="top"
        src={`http://127.0.0.1:8000${image}`}
        style={{ objectFit: "cover", height: "30rem" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem" }}>{name}</Card.Title>
        <Card.Text>Date of birth: {date_of_birth}</Card.Text>
        <Button
          variant="info"
          style={{ color: "#FFFFFF", width: "35%" }}
          as={Link}
          to={`director-details/${id}`}
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
