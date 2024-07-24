import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  const [productType, setProductType] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [priceRange, productType, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products'); // Replace with your actual API endpoint
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initialize filteredProducts with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    if (productType) {
      filtered = filtered.filter(product => product.type === productType);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-container">
      <h1>Products</h1>
      
      <div className="filters">
        <label>
          Price Range:
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-300">$101 - $300</option>
            <option value="301-600">$301 - $600</option>
          </select>
        </label>
        
        <label>
          Product Type:
          <select value={productType} onChange={(e) => setProductType(e.target.value)}>
            <option value="">All</option>
            <option value="Jordans">Jordan</option>
            <option value="Nike">Dunk</option>
            <option value="Bape">BAPE</option>
            <option value="Essentials">Essentials</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id} className="product">
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
