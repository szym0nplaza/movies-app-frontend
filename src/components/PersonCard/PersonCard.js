import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PersonList({ person: { name, imgurl, dob } }) {
  return (
    <Card style={{ margin: "10px 0" }}>
      <Card.Img
        variant="top"
        src={imgurl}
        style={{ objectFit: "cover", height: "30rem" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem" }}>{name}</Card.Title>
        <Card.Text>Date of birth: {dob}</Card.Text>
        <Button variant="info" style={{ color: "#FFFFFF", width: "35%" }}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
