import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

export default function InfoButton({ title, msg }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{msg}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="primary" style={{ color: "white", marginRight: "5px" }}>
        <b>i</b>
      </Button>
    </OverlayTrigger>
  );
}
