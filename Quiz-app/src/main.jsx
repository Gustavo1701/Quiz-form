import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importe apenas o BrowserRouter

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Envolva App com BrowserRouter */}
    <App />
  </BrowserRouter>,
);
