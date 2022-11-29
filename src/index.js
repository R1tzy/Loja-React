import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSS global
import App from './App'; //component app


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

