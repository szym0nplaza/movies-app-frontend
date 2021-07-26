import React, { useEffect, useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import fetchData from "../../services/fetchData";

export default function MovieDetailsCard() {
  let { slug } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://127.0.0.1:8000/api/movie-details/${slug}`
      );
      setDetails(detail);
    };
    data();
  }, []);

  if (!details) {
    return <Spinner animation="border" variant="info" />;
  }

  const { image, title, year_of_production, director, actors, description } =
    details;

  return (
    <Card style={{ maxWidth: "50rem", margin: "2rem auto" }}>
      <Card.Img
        style={{ objectFit: "cover", height: "30rem" }}
        variant="top"
        src={`http://127.0.0.1:8000${image}`}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem", margin: "0 0 1rem 1rem" }}>
          {title}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Year of production: {year_of_production}
          </ListGroupItem>
          <ListGroupItem>Director: {director}</ListGroupItem>
          <ListGroupItem>Actors: {actors.join(", ")}</ListGroupItem>
          <ListGroupItem>Description: {description}</ListGroupItem>
        </ListGroup>
        <Button
          style={{ color: "#FFFFFF", width: "100%", marginTop: "1rem" }}
          variant="info"
          as={Link}
          to=""
        >
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
}
