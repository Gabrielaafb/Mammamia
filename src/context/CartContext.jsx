import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map(item =>
        item.id === pizza.id ? { ...existingPizza, quantity: existingPizza.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? 
        { ...pizza, quantity: pizza.quantity > 1 ? pizza.quantity - 1 : 0 } : pizza
    ).filter(pizza => pizza.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  const totalAmount = calculateTotal(); 

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
