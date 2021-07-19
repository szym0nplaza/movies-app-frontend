import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function MovieCard({
  movie: { id, title, director, year_of_production, image },
}) {
  return (
    <Card style={{ margin: "10px 0" }}>
      <Card.Img
        variant="top"
        src={`http://127.0.0.1:8000${image}`}
        style={{ objectFit: "cover", height: "20rem" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          {title}
        </Card.Title>
        <ListGroup>
          <Card.Text>Year of production: {year_of_production}</Card.Text>
          <Card.Text>Director: {director}</Card.Text>
          <Link to={`movie-details/${id}`}>
            <Button variant="info" style={{ borderRadius: 0, color: "white" }}>
              Read more
            </Button>
          </Link>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
