import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (   
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
          <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
