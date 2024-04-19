// App.js
import React from "react";
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import logo from "./logo.jpg";
import side from './side.jpg';

function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li><li className="brand">
            <img src={logo} alt="Beyond-Meat" className="logo" />
            
          </li></li>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Product" className="nav-link">Product</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
