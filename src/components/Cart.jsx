import { useState } from 'react';
import pizzaCart from './pizzaCart'; 
import { Button } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (name) => {
    setCart(cart.map(pizza => 
      pizza.name === name ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (name) => {
    setCart(cart.map(pizza => 
      pizza.name === name ? 
        { ...pizza, quantity: pizza.quantity > 1 ? pizza.quantity - 1 : 0 } : pizza
    ).filter(pizza => pizza.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0).toLocaleString();
  };

  return (
    <div className="cart">
      {cart.map(pizza => (
        <div key={pizza.name} className="cart-item">
          <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: 'auto' }} />
          <h2>{pizza.name}</h2>
          <p>${pizza.price.toLocaleString()}</p>
          <p>Quantity: {pizza.quantity}</p>
          <Button variant="outline-secondary" onClick={() => increaseQuantity(pizza.name)}>+</Button>
          <Button variant="outline-secondary" onClick={() => decreaseQuantity(pizza.name)}>-</Button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <Button variant="primary">Paga aquí</Button>
    </div>
  );
};

export default Cart;
