import React from 'react';
import { Outlink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/gkclt.png" alt="gkcltlogo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="cart-icon">
          <img src="/images/grocery-store.png" alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
