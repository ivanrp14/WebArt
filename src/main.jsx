// main.jsx (o index.js)
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Asume que tienes un componente App que contiene toda tu aplicación

// Usar createRoot para inicializar la aplicación
const root = createRoot(document.getElementById('root'));
root.render(<App />);
