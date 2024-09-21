import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      setModalTitle('Error');
      setModalMessage('Las contraseñas no coinciden.');
      setShowModal(true);
      return;
    }

    setModalTitle('Éxito');
    setModalMessage('¡Registro exitoso!');
    setShowModal(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h2 className="text-center mb-4">Registro</h2>
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

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Registrarse
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

export default Register;

