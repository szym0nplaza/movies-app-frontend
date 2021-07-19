import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import fetchData from "../../services/fetchData";

export default function PersonDetailsCard(id) {
  return (
    <Card>
      <Card.Img variant="top" src={`http://127.0.0.1:8000${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date of birth: {date_of_birth}</ListGroupItem>
          <ListGroupItem>Movies: {movies}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
