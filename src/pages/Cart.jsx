import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Card } from 'react-bootstrap';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tu Carrito</h2>
      {cart.map(pizza => (
        <Card key={pizza.name} className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
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
      ))}
      <h3 className="text-center mt-4">Total: ${totalAmount.toLocaleString()}</h3>
      <div className="text-center mt-3">
        <Button variant="primary">Paga aquí</Button>
      </div>
    </div>
  );
};

export default Cart;
