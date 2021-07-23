import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchData from "../../services/fetchData";

export default function UsersGrid() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const user = await fetchData("http://127.0.0.1:8000/api/get-users/");
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
