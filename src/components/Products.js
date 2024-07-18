import React from 'react';
import '../styles/Products.css'; 
import gklogo from '../images/gkclt.png';

const Products = () => {
  return (
    <>
    <div className="home-imagepro">
      <img src={gklogo} alt="Nike" />
    </div>
    <div id="product-container" className="container">
      {/* Your product content goes here */}
    </div>
    </>
  );
}

export default Products;
