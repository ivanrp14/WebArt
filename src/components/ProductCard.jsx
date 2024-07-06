import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ name, description, price, imageUrl, InCart=false }) {
  const [inCart, setInCart] = useState(InCart);
  
  const handleButtonClick = () => {
    setInCart(true);
  };

  const handleMouseEnter = (event) => {
    if (inCart) {
      event.target.textContent = "Quitar del carrito";
    }
  };

  const handleMouseLeave = (event) => {
    if (inCart) {
      event.target.textContent = "En el carrito";
    }
  };

  const handleResetClick = () => {
    setInCart(false);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-card__image" />
      <div className="product-card__content">
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">${price}</p>
        <button 
          className={`product-card__button ${inCart ? 'product-card__button--in-cart' : ''}`} 
          onClick={inCart ? handleResetClick : handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {inCart ? 'En el carrito' : 'Comprar'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
