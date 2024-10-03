import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 
import { Button, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalAmount } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate(); 

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };

  const handlePayment = () => {
    setModalMessage("¡Compra exitosa! Gracias por tu pedido.");
    setShowModal(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tu Carrito</h2>
      {cart.length > 0 ? (
        cart.map(pizza => (
          <Card key={pizza.id} className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                <strong>Precio:</strong> ${pizza.price.toLocaleString()}<br />
                <strong>Cantidad:</strong> {pizza.quantity}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => increaseQuantity(pizza.id)}>+</Button>
                <Button variant="outline-secondary" onClick={() => decreaseQuantity(pizza.id)}>-</Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">Tu carrito está vacío</p>
      )}
      {cart.length > 0 && (
        <>
          <h3 className="text-center mt-4">Total: ${totalAmount.toLocaleString()}</h3>
          <div className="text-center mt-3">
            <Button variant="primary" onClick={handlePayment} disabled={!token}>
              Paga aquí
            </Button>
            {!token && <p className="text-danger mt-2">Debes iniciar sesión para pagar</p>}
          </div>
        </>
      )}
      {token && (
        <div className="text-center mt-3">
          <Button variant="secondary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
