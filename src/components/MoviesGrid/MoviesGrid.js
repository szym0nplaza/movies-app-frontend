import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export default function MoviesGrid() {
  const movies = [];

  return (
    <Container fluid="md">
      <Row>
        {movies.map((movie) => (
          <Col lg={4} md={6} sm={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
