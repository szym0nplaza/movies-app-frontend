import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchData from "../../services/fetchData";

export default function ManageMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = async () => {
      const movie = await fetchData("http://127.0.0.1:8000/api/movies/");
      setMovies(movie);
    };
    data();
  }, []);
  return (
    <Container style={{ width: "25rem", margin: "2rem auto" }}>
      <ListGroup style={{ marginBottom: "1rem" }}>
        <Button variant="success" as={Link} to="/add-movie">
          Add Movie +
        </Button>
      </ListGroup>
      <ListGroup defaultActiveKey="#link3">
        {movies.map((movie) => (
          <ListGroup.Item
            action
            key={movie.id}
            as={Link}
            to={`/movie-settings/${movie.id}`}
          >
            {movie.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
