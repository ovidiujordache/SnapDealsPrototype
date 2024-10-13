import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const remove = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <CartContext.Provider value={{ count, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};
