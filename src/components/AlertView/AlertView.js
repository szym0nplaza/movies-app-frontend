import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertView({ msg }) {
  return <Alert variant="danger">{msg}</Alert>;
}
