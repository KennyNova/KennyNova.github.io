import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App';
import { Construction } from './Construction.js'
import { Stars } from './components/Stars.js';


ReactDOM.render(
  <React.StrictMode>
    <Stars />
    <Construction />
  </React.StrictMode>,
  document.getElementById('root')
);
