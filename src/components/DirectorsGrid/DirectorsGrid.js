import React, { useEffect, useState } from "react";
import DirectorCard from "../DirectorCard/DirectorCard";
import { Container, Col, Row } from "react-bootstrap";
import fetchData from "../../services/fetchData";

export default function DirectorsGrid() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const data = async () => {
      const director = await fetchData("http://127.0.0.1:8000/api/directors/");
      setDirectors(director);
    };
    data();
  }, []);
  return (
    <Container fluid="md">
      <Row>
        {directors.map((director, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <DirectorCard person={director} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
