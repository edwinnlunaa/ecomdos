// Import React and necessary components from react-router-dom for routing
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import Products from './components/Products'; // Import Products component
import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import CSS for styling the app

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter component provides routing context */}
      <div className="App">
        <Navbar /> {/* Renders the navigation bar at the top of the page */}
        
        <Routes> {/* Defines the routes for the application */}
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          <Route path="/Products" element={<Products />} /> {/* Route for the products page */}
          <Route path="/Contact" element={<Contact />} /> {/* Route for the contact page */}
        </Routes>
        
        <Footer /> {/* Renders the footer at the bottom of the page */}
      </div>
    </BrowserRouter>
  );
}

export default App;
