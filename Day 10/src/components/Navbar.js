// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../assets/css/Navbar.css'
import { ShoppingCart } from "phosphor-react";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/side" className="navbar-link">
              Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>

           <Link to="/cart">
          <ShoppingCart size={26} />
        </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
