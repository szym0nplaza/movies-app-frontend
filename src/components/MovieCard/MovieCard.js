import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function MovieCard({ title, director, yop }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Year of production: {yop}</ListGroupItem>
        <ListGroupItem>Director: {director}</ListGroupItem>
        <Button variant="info" style={{ borderRadius: 0, color: "white" }}>
          Read more
        </Button>
      </ListGroup>
    </Card>
  );
}
