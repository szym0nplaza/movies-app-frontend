import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

export default function MovieCard({ movie: { title, director, yop, imgurl } }) {
  return (
    <Card style={{ margin: "10px 0" }}>
      <Card.Img
        variant="top"
        src={imgurl}
        style={{ objectFit: "cover", height: "20rem" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          {title}
        </Card.Title>
        <ListGroup>
          <Card.Text>Year of production: {yop}</Card.Text>
          <Card.Text>Director: {director}</Card.Text>
          <Button variant="info" style={{ borderRadius: 0, color: "white" }}>
            Read more
          </Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
