import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App';
import { Stars } from './components/Stars.js';


ReactDOM.render(
  <React.StrictMode>
    <Stars/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
