import React, { useContext, useEffect, useState } from "react";
import DirectorCard from "../DirectorCard/DirectorCard";
import { Container, Col, Row, Alert } from "react-bootstrap";
import { fetchData } from "../../services/client";
import { Link } from "react-router-dom";
import userContext from "../../context/userContext";

export default function DirectorsGrid() {
  const [directors, setDirectors] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    const data = async () => {
      const director = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/directors/`
      );
      setDirectors(director);
    };
    data();
  }, []);

  

  const directorCheck = () => {
    if (user === null && directors.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no directors right now! If you want to add one{" "}
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
    } else if (directors.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no directors right now! If you want to add one go to{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/add-director"
          >
            {" "}
            <b>add director</b>{" "}
          </Link>{" "}
          page.
        </Alert>
      );
    }
  };

  return (
    <Container fluid="md">
      {directorCheck()}
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
