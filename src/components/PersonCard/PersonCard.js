import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PersonList({ name, imageurl, dob }) {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={imageurl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Date of birth: {dob}</Card.Text>
        <Button variant="info">Read more</Button>
      </Card.Body>
    </Card>
  );
}
