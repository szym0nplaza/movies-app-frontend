import React from "react";
import { Badge, Button } from "react-bootstrap";

export default function ActorTile({ name, onRemove }) {
  return (
    <Badge bg="info" style={{ marginBottom: "3px" }}>
      {name}
      <Button
        size="sm"
        variant="danger"
        style={{ marginLeft: "3px" }}
        onClick={() => onRemove(name)}
      >
        X
      </Button>
    </Badge>
  );
}
