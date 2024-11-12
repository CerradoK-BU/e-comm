import React, { useState } from 'react';

const Button = ({ onAddToCart, onAddToFavorites }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    onAddToCart();
    setMessage('Item added to cart!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleAddToFavorites = () => {
    onAddToFavorites();
    setMessage('Item added to favorites!');
    setTimeout(() => setMessage(''), 2000);
  }

  return (
    <div className='cart'>
      <button className='btn btn-info fs-5 me-2' onClick={handleAddToCart}>
        <i className="bi bi-cart-fill me-2"></i>Add to cart
      </button>
      <button className='btn btn-info' onClick={handleAddToFavorites}>
        <i className="bi bi-heart"></i>
      </button>
      {message && <p className="text-success mt-2">{message}</p>}
    </div>
  );
};

export default Button;
