import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './views/Login'; // Asegúrate de importar el componente de login
import Register from './views/Register';
import { StoreProvider } from './utils/Store';

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Redirección por defecto */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Ruta de login */}
          <Route path="/login" element={<Login />} />
          
          {/* Ruta de registro */}
          <Route path="/register" element={<Register />} />
          
          {/* Ruta del menú principal */}
          <Route path="/data" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);
