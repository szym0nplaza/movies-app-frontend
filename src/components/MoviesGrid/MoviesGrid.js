import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export default function MoviesGrid() {
  const movies = [
    {
      title: "Gladiator",
      director: "Ridley Scott",
      yop: "2000-09-15",
      imgurl:
        "https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20201126/ROH/311269936/AR/0/AR-311269936.jpg?imageversion=Artykul&lastModified=",
    },
  ];

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
