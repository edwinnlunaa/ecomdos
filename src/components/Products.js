import React, { useEffect, useState } from 'react'; // Importing necessary hooks from React
import '../styles/Products.css'; // Importing CSS for styling

// Defining the Products component
const Products = () => {
  // Setting up state variables
  const [products, setProducts] = useState([]); // To store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // To store filtered products
  const [priceRange, setPriceRange] = useState(''); // To store selected price range
  const [productType, setProductType] = useState(''); // To store selected product type

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    fetchProducts(); // Fetch products from the API
  }, []);

  // useEffect to filter products whenever priceRange, productType, or products change
  useEffect(() => {
    filterProducts(); // Filter the products based on the selected criteria
  }, [priceRange, productType, products]);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://ecomdos.onrender.com/api/products'); 
      const data = await response.json();
      if (Array.isArray(data)) { // Check if the fetched data is an array
        setProducts(data); // Set the products state with fetched data
        setFilteredProducts(data); // Initialize filteredProducts with the fetched data
      } else {
        setProducts([]); // Set products to empty array if fetched data is not an array
        setFilteredProducts([]); // Set filteredProducts to empty array if fetched data is not an array
      }
    } catch (error) {
      console.error('Error fetching products:', error); // Log any error
      setProducts([]); // Set products to empty array in case of error
      setFilteredProducts([]); // Set filteredProducts to empty array in case of error
    }
  };

  // Function to filter products based on selected criteria
  const filterProducts = () => {
    let filtered = products; // Start with all products

    // Filter by price range if selected
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number); // Split and convert price range to numbers
      filtered = filtered.filter(product => product.price >= min && product.price <= max); // Filter products within the price range
    }

    // Filter by product type if selected
    if (productType) {
      filtered = filtered.filter(product => product.type === productType); // Filter products by type
    }

    setFilteredProducts(filtered); // Update the filteredProducts state
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
        {Array.isArray(filteredProducts) && filteredProducts.map(product => (
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

export default Products; // Exporting the Products component
