import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fetchData from "../../services/fetchData";

export default function MovieDetailsCard() {
  let { slug } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://127.0.0.1:8000/api/movie-details/${slug}`
      );
      setDetails(detail);
    };
    data();
  }, []);

  const { image, title, year_of_production, director, actors, description } =
    details;

  console.log(details);

  return (
    <Card style={{ maxWidth: "50rem", margin: "auto" }}>
      <Card.Img variant="top" src={`http://127.0.0.1:8000${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Year of production: {year_of_production}
          </ListGroupItem>
          <ListGroupItem>Director: {director}</ListGroupItem>
          <ListGroupItem>Actors: {actors}</ListGroupItem>
          <ListGroupItem>Description: {description}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
