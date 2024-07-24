// Import React and necessary components from react-router-dom for routing
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import CSS for styling the navbar

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Navbar container */}
      <div className="container">
        {/* Logo section */}
        <div className="logo">
          <img src="/images/gkclt.png" alt="gkcltlogo" /> {/* Logo image */}
        </div>
        
        {/* Navigation links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Link to the home page */}
          <li><Link to="/Products">Products</Link></li> {/* Link to the products page */}
          <li><Link to="/Contact">Contact</Link></li> {/* Link to the contact page */}
        </ul>
        
        {/* Cart icon section */}
        <div className="cart-icon">
          <img src="/images/grocery-store.png" alt="Cart" /> {/* Cart icon image */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
