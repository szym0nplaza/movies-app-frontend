import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function MovieDetails({ title, description, yof, imgurl }) {
  return (
    <Card>
      <Card.Img src={imgurl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to="/movies">
          <Button variant="primary-outline">Go back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
