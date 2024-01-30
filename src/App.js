import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home"
import Panier from "./pages/Panier"
import User from "./pages/User"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/Panier">Panier</Link>
          <Link to="/User">User</Link>
        </header>

        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Panier' Component={Panier}></Route>
          <Route path='/User' Component={User}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
