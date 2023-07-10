import React, { useState } from 'react';
import {MenuItem} from './components/MenuItem.js'
import './styles/App.css';
import './styles/tailwind.css';


function App() {

  return (

    <div>

      <div className="list mt-44">  
        <a>
          <MenuItem text="Resume"></MenuItem>
        </a>
        <a>
          <MenuItem text="Projects"></MenuItem>
        </a>
        <a>
          <MenuItem text="Album"></MenuItem>
        </a>
        <a>
          <MenuItem text="ex"></MenuItem>
        </a>
      </div>

    </div>
  );
}

export default App;