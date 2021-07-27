import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import deleteData from "../../services/deleteData";
import fetchData from "../../services/fetchData";
import postFormData from "../../services/postFormData";
import ActorTile from "../AddMovie/ActorTile";
import InfoButton from "../InfoButton/InfoButton";

export default function MovieSettings() {
  let { slug } = useParams();
  const [details, setDetails] = useState(null);

  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [chosenActors, setChosenActors] = useState([]);
  const [actorNames, setActorNames] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [director, setDirector] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const data = async () => {
      const actor = await fetchData("http://127.0.0.1:8000/api/actors/");
      const director = await fetchData("http://127.0.0.1:8000/api/directors/");
      const detail = await fetchData(
        `http://127.0.0.1:8000/api/movie-details/${slug}`
      );
      setActors(actor);
      setDirectors(director);
      setDetails(detail);
    };
    data();
  }, []);

  useEffect(() => {
    if (details) {
      setChosenActors(details.actors);
    }
  }, [details]);

  if (!details) {
    return <Spinner animation="border" variant="info" />;
  }

  if (response === "Deleted.")
    return <Alert variant="danger">Movie {details.title} deleted.</Alert>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("year_of_production", date);
    formData.append("image", image);
    formData.append("director", director);
    formData.append("actors", chosenActors);

    const responseData = await postFormData(
      "http://127.0.0.1:8000/api/manage-movie/",
      formData
    );
    setResponse(responseData);
  };

  const handleSuccess = () => {
    if (response === "Passed.") {
      return <Alert variant="success">Movie modified successfully!</Alert>;
    }
  };

  const handleError = () => {
    if (response === null) return;
    if (response !== null || response !== "Passed.")
      return <Alert variant="danger">Inavlid data!</Alert>;
  };

  const removeActor = (name) => {
    const newActors = chosenActors.filter((actor) => name !== actor);
    setChosenActors(newActors);
  };

  const deleteMovie = async () => {
    const responseData = await deleteData(
      `http://127.0.0.1:8000/api/manage-movie/${slug}/`
    );
    setResponse(responseData);
  };

  return (
    <Form
      style={{
        width: "40rem",
        border: "2px solid rgb(206, 212, 218)",
        borderRadius: "6px",
        padding: "1.2rem 1rem",
        margin: "3rem auto ",
      }}
      onSubmit={handleSubmit}
    >
      {handleSuccess()}
      {handleError()}
      <Form.Label style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        <Form.Text>Update movie</Form.Text>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={details.title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
          value={details.description}
        />
      </Form.Group>
      <Form.Label>Year of production</Form.Label>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Form.Control
          value={details.year_of_production}
          type="date"
          onChange={(e) => setDate(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <InfoButton
          title="Hint"
          msg="If there is no director in that list, first you need to add new director."
        />
        <Form.Control as="select" onChange={(e) => setDirector(e.target.value)}>
          <option value={details.director}>{details.director}</option>
          {directors.map((director) => {
            return (
              <option value={director.name} key={director.id}>
                {director.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" style={{ display: "flex" }}>
        <InfoButton
          title="Hint"
          msg="If there is no actor in that list, first you need to add new actor."
        />
        <Form.Control
          as="select"
          onChange={(e) => {
            setActorNames(e.target.value);
          }}
        >
          <option>Choose actors</option>
          {actors.map((actor) => {
            return (
              <option
                value={actor.name}
                key={actor.id}
              >{`${actor.name}`}</option>
            );
          })}
        </Form.Control>
        <Button
          variant="outline-primary"
          style={{ marginLeft: "5px" }}
          onClick={() => {
            if (chosenActors.includes(actorNames)) return;
            if (actorNames === "" || actorNames === "Choose actors") return;
            setChosenActors([...chosenActors, actorNames]);
          }}
        >
          Add
        </Button>
      </Form.Group>

      <Form.Group className="mb-3">
        <Row>
          {chosenActors.map((actorName) => (
            <Col key={actorName}>
              <ActorTile name={actorName} onRemove={removeActor} />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group
        controlId="formFileSm"
        className="mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img
          src={`http://127.0.0.1:8000${details.image}/`}
          style={{ marginBottom: "1rem" }}
        />
        <Form.Label>Upload movie image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </Form.Group>
      <Button
        variant="warning"
        type="submit"
        style={{ width: "100%", color: "white", marginBottom: "0.5rem" }}
      >
        Update Movie
      </Button>
      <Button
        variant="danger"
        style={{ width: "100%", color: "white" }}
        onClick={deleteMovie}
      >
        Delete Movie
      </Button>
    </Form>
  );
}
