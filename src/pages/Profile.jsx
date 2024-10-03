import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function Profile() {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container my-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="mb-4">Perfil</Card.Title>
          <Card.Text>
            Email: {token ? "usuario@ejemplo.com" : "No disponible"}
          </Card.Text>
          <Button variant="primary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;



  