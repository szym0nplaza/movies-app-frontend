import React, { useEffect, useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../services/client";

export default function MovieDetailsCard() {
  let { slug } = useParams();
  const [details, setDetails] = useState(null);
  const [directorId, setDirectorId] = useState(null);
  const [actorsTab, setActorsTab] = useState([]);

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://127.0.0.1:8000/api/movie-details/${slug}`
      );
      const director = await fetchData(
        `http://127.0.0.1:8000/api/get-director-id/${detail.movie.director}/`
      );
      setActorsTab(detail.actors);
      setDetails(detail.movie);
      setDirectorId(director.id);
    };
    data();
  }, []);

  if (!details) {
    return (
      <Spinner
        animation="border"
        variant="info"
        style={{ margin: "3rem auto" }}
      />
    );
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
          <ListGroupItem>
            Director:{" "}
            <Link
              to={`/director-details/${directorId}`}
              style={{ textDecoration: "none" }}
            >
              {director}
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            Actors:{" "}
            {actorsTab.map((actor) => {
              return (
                <Link
                  key={actor.id}
                  to={`/actor-details/${actor.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {`${actor.name}, `}
                </Link>
              );
            })}
          </ListGroupItem>
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
