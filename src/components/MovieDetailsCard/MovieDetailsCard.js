import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
  Container,
  Alert,
} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchData, postData } from "../../services/client";
import ReactStarsRating from "react-awesome-stars-rating";
import userContext from "../../context/userContext";

export default function MovieDetailsCard() {
  const { user } = useContext(userContext);
  const history = useHistory();
  let { slug } = useParams();
  const [details, setDetails] = useState(null);
  const [directorId, setDirectorId] = useState(null);
  const [actorsTab, setActorsTab] = useState([]);
  const [stars, setStars] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [button, setButton] = useState(false);
  const [response, setResponse] = useState(false);
  const [myStars, setMyStars] = useState(0);

  const awaitStars = async (title) => {
    const starsData = await fetchData(
      `http://${process.env.REACT_APP_API_URL}/api/get-ratings/${title}/`
    );
    setStars(starsData);
  };

  useEffect(() => {
    const data = async () => {
      const detail = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/movie-details/${slug}`
      );
      const director = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/get-director-id/${detail.movie.director}/`
      );
      setActorsTab(detail.actors);
      setDetails(detail.movie);
      setDirectorId(director.id);
      awaitStars(detail.movie.title);
    };
    data();
  }, []);

  useEffect(() => {
    if (details) awaitStars(details.title);
  }, [response]);

  if (!details) {
    return (
      <Spinner
        animation="border"
        variant="info"
        style={{ margin: "3rem auto", display: "block" }}
      />
    );
  }

  const handleRating = async () => {
    setMyStars(stars);
    const response = await postData(`http://${process.env.REACT_APP_API_URL}/api/rate-movie/`, {
      email: user.email,
      amount: stars,
      title: details.title,
    });
    if (response === "Added.") {
      setResponse(true);
      setIsEdit(false);
      setTimeout(() => {
        setResponse(false);
      }, 5000);
    }
  };

  const { image, title, year_of_production, director, actors, description } =
    details;

  const handleStars = () => {
    if (user === null) {
      history.push("/login");
    }
    setIsEdit(true);
    setButton(true);
  };

  return (
    <Card style={{ maxWidth: "50rem", margin: "2rem auto" }}>
      <Card.Img
        style={{ objectFit: "cover", height: "30rem" }}
        variant="top"
        src={`http://${process.env.REACT_APP_API_URL}${image}`}
      />
      <Card.Body>
        {response ? (
          <Alert variant="warning">
            You rated this movie on <b>{myStars}</b> stars!
          </Alert>
        ) : null}
        <Card.Title
          style={{
            fontSize: "2rem",
            margin: "0 0 1rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "1rem",
          }}
        >
          <Card.Text style={{ margin: "0", width: "150%" }}>{title}</Card.Text>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginLeft: "auto",
            }}
          >
            <Button variant="link" onClick={handleStars}>
              <ReactStarsRating
                isEdit={isEdit}
                size={30}
                value={stars}
                onChange={(value) => {
                  setStars(value);
                }}
                className="stars-rating"
              />
            </Button>
            {button ? (
              <Button
                variant="warning"
                size="sm"
                style={{ margin: "0.5rem 1.5rem 0 0", color: "white" }}
                onClick={handleRating}
              >
                Rate that movie!
              </Button>
            ) : null}
          </Container>
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
