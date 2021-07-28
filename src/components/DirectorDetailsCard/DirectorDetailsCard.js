import { Button, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../services/client";

export default function DirectorDetailsCard() {
  let { slug } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://127.0.0.1:8000/api/director-details/${slug}`
      );
      setDetails(detail);
    };
    data();
  }, []);

  if (!details) {
    return (
      <Spinner
        style={{ display: "block", margin: "5rem auto" }}
        animation="border"
        variant="info"
      />
    );
  }

  const { name, image, date_of_birth, movies } = details.director_info;

  return (
    <Card style={{ maxWidth: "50rem", margin: "2rem auto" }}>
      <Card.Img variant="top" src={`http://127.0.0.1:8000${image}`} />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem", margin: "0 0 1rem 1rem" }}>
          {name}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date of birth: {date_of_birth}</ListGroupItem>
          <ListGroupItem>Movies: {details.movies.join(", ")}</ListGroupItem>
        </ListGroup>
        <Button
          style={{ color: "#FFFFFF", width: "100%", marginTop: "1rem" }}
          variant="info"
          as={Link}
          to="/directors"
        >
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
}
