import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UserContext } from "../context/UserContext"; 
import { Navigate } from "react-router-dom";

const Login = () => {
  const { token, login } = useContext(UserContext);  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  if (token) {
    return <Navigate to="/" />;  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setModalTitle('Error');
      setModalMessage('Todos los campos son obligatorios.');
      setShowModal(true);
      return;
    }

    if (password.length < 6) {
      setModalTitle('Error');
      setModalMessage('La contraseña debe tener al menos 6 caracteres.');
      setShowModal(true);
      return;
    }

    try {
      await login(email, password); 

      setModalTitle('Éxito');
      setModalMessage('¡Inicio de sesión exitoso!');
      setShowModal(true); 
    } catch (error) {
      setModalTitle('Error');
      setModalMessage(error.message || 'Error al iniciar sesión');
      setShowModal(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Iniciar Sesión
          </Button>
        </Form>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
