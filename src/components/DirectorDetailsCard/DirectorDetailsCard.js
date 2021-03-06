import { Button, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../services/client";

export default function DirectorDetailsCard() {
  let { slug } = useParams();
  const [details, setDetails] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/director-details/${slug}`
      );
      setDetails(detail);
      setMovies(detail.movies);
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

  const { name, image, date_of_birth } = details.director_info;

  return (
    <Card style={{ maxWidth: "50rem", margin: "2rem auto" }}>
      <Card.Img
        variant="top"
        src={`http://${process.env.REACT_APP_API_URL}${image}`}
        style={{ maxHeight: "40rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem", margin: "0 0 1rem 1rem" }}>
          {name}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date of birth: {date_of_birth}</ListGroupItem>
          <ListGroupItem>
            Movies:{" "}
            {movies.map((movie) => {
              return (
                <Link
                  key={movie.id}
                  to={`/movie-details/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {`${movie.title}, `}
                </Link>
              );
            })}
          </ListGroupItem>
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
