import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import userContext from "../../context/userContext";
import { fetchData } from "../../services/client";
import ActorCard from "../ActorCard/ActorCard";

export default function ActorsGrid() {
  const [actors, setActors] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    const data = async () => {
      const actor = await fetchData("http://127.0.0.1:8000/api/actors/");
      setActors(actor);
    };
    data();
  }, []);

  const actorCheck = () => {
    if (user === null && actors.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no actors right now! If you want to add one{" "}
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
    } else if (actors.length === 0) {
      return (
        <Alert variant="dark" style={{ marginTop: "2rem" }}>
          There are no actors right now! If you want to add one go to{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/add-actor"
          >
            {" "}
            <b>add actor</b>{" "}
          </Link>{" "}
          page.
        </Alert>
      );
    }
  };

  return (
    <Container fluid="md">
      {actorCheck()}
      <Row>
        {actors.map((actor, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <ActorCard person={actor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
