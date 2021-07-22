import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import fetchData from "../../services/fetchData";
import userContext from "../../context/userContext";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(userContext);
  useEffect(() => {
    const data = async () => {
      const movie = await fetchData("http://127.0.0.1:8000/api/movies/");
      setMovies(movie);
    };
    data();
  }, []);
  console.log(user);
  return (
    <Container fluid="md">
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
