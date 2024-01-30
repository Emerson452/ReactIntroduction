import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
        </header>


      </BrowserRouter>
    </div>
  );
}

export default App;
