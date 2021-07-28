import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertView({ msg, type }) {
  return <Alert variant={type}>{msg}</Alert>;
}
