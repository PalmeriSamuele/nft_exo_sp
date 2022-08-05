import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';   // !!! importer bootstrap dands le index.js

import '../src/sass/style.sass'  // toujours importer le fichier sass dans index.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
