import React from 'react';
import ProductCard from '../components/ProductCard';
import  '../styles/Products.css';

function Products() {
  const products = [
    {
      name: 'Obra de Arte 1',
      description: 'Descripción de la obra de arte 1.',
      price: '200.00',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'Obra de Arte 2',
      description: 'Descripción de la obra de arte 2.',
      price: '300.00',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'Obra de Arte 3',
      description: 'Descripción de la obra de arte 3.',
      price: '250.00',
      imageUrl: 'https://via.placeholder.com/300x200'
      
    }
  ];

  return (
    <div className="products">
      <h1>Galería de Obras</h1>
      <div className="products__container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
