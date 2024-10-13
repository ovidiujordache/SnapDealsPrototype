


import React from 'react';


import { useCart } from '../ContextProviders/CartContext';

const ShoppingCartComponent = () => {
  const { count, add, remove } = useCart(); 
  return (
    <div>
            <i className="bi bi-cart" style={{padding:'20px'}}><span style={{padding:'10px'}}>{count}</span></i> 
      <button className="primary" onClick={add}>Add +</button>
      <button className="secondary" onClick={remove}>Remove -</button>
    </div>
  );
};

export default ShoppingCartComponent;
