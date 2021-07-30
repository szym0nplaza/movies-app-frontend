import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { fetchData } from "../../services/client";
import { Link } from "react-router-dom";
import userContext from "../../context/userContext";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    const data = async () => {
      const movie = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/movies/`
      );
      setMovies(movie);
    };
    data();
  }, []);

  const movieCheck = () => {
    if (user === null && movies.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no movies right now! If you want to add one{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            {" "}
            <b>register</b>{" "}
          </Link>{" "}
          in our page.
        </Alert>
      );
    } else if (movies.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no movies right now! If you want to add one go to{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/add-movie"
          >
            {" "}
            <b>add movie</b>{" "}
          </Link>{" "}
          page.
        </Alert>
      );
    }
  };

  return (
    <Container fluid="md">
      {movieCheck()}
      <Row>
        {movies.map((movie, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
