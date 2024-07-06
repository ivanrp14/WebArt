import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Bienvenido a MelTheDog</h1>
        <p className="home-description">
          Descubre y compra obras de arte para apoyar a Mel.
        </p>
        <Link to="/products" className="explore-button">
          Explorar Productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
