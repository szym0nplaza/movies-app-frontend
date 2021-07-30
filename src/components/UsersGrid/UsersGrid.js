import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData } from "../../services/client";

export default function UsersGrid() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const user = await fetchData(
        `http://${process.env.REACT_APP_API_URL}/api/get-users/`
      );
      setUsers(user);
    };
    data();
  }, []);
  return (
    <ListGroup
      defaultActiveKey="#link3"
      style={{ width: "25rem", margin: "2rem auto" }}
    >
      {users.map((user) => (
        <ListGroup.Item
          action
          key={user.id}
          as={Link}
          to={`/user-settings/${user.id}`}
        >
          {user.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
