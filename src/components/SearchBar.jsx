import React from 'react';
import '../styles/SearchBar.css'; // Importar archivo de estilos CSS

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="button" className="search-button">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
