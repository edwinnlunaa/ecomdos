import React, { useEffect, useState } from 'react';
import '../styles/Products.css';

const Products = () => {
  const sampleProducts = [
    { id: 1, title: "Air Jordan 1 Retro High OG 'Chicago Lost & Found'", description: "The Air Jordan 1 Retro High OG 'Chicago Lost & Found' brings back the iconic silhouette that started it all.", price: 399.99, img: "/images/laf1.png", type: "Jordans" },
    { id: 2, title: "Air Jordan 4 Retro 'Military Blue' 2024", description: "The 2024 edition of the Air Jordan 4 Retro 'Military Blue' also known as 'Industrial Blue' brings back a coveted OG colorway of the legacy silhouette.", price: 249.99, img: "/images/milib4.png", type: "Jordans" },
    { id: 3, title: "Air Jordan 3 Retro 'White Cement Reimagined'", description: "The Air Jordan 3 Retro 'White Cement Reimagined' brings back one of the original colorways, celebrating the 35th anniversary of the AJ3.", price: 329.99, img: "/images/wc3.png", type: "Jordans" },
    { id: 4, title: "Dunk Low 'Black White'", description: "The Nike Dunk Low ‘Black White’ also known as 'Panda' treats the retro model to an essential two-tone color scheme that accentuates the sneaker’s clean lines.", price: 99.99, img: "/images/panda.png", type: "Nike" },
    { id: 5, title: "Dunk Low 'Concord'", description: "The Nike Dunk Low 'Concord' is built with smooth leather construction, featuring a crisp white base with bluish purple overlays and a color-matched Swoosh.", price: 89.99, img: "/images/purpledunk.png", type: "Nike" },
    { id: 6, title: "Dunk Low 'Gym Red'", description: "The Nike Dunk Low ‘Gym Red’ showcases a familiar two-tone design that recalls the original ‘Be True to Your School’ series from 1985.", price: 99.99, img: "/images/reddunk.png", type: "Nike" },
    { id: 7, title: "BAPE Color Camo Shark Full Zip Hoodie 'Red'", description: "BAPE's Color Camo Shark Full Zip Hoodie 'Red' from FW20 brings back the Japanese brand's iconic shark-face design.", price: 399.99, img: "/images/bphoodie.png", type: "Bape" },
    { id: 8, title: "BAPE Multi Camo 2nd Shark Full Zip Hoodie 'White'", description: "BAPE's Multi-Color Camo Shark Full Zip Hoodie from FW20 brings back the Japanese brand's iconic shark-face design.", price: 530.99, img: "/images/bpcolorhoodie.png", type: "Bape" },
    { id: 9, title: "BAPE Color Camo Shark Full Zip Hoodie 'Black'", description: "From SS23, BAPE's Color Camp Shark Full Zip Hoodie is designed in black camouflage and features a full-extension zip that can be extended to join the hood.", price: 499.99, img: "/images/bpblackhoodie.png", type: "Bape" },
    { id: 10, title: "Fear of God Essentials Pullover Hoodie 'Stretch Limo' SS22", description: "Fear of God Essentials focuses on lasting staples that complement the brand's mainline collections.", price: 49.99, img: "/images/esseblack.png", type: "Essentials" },
    { id: 11, title: "Fear of God Essentials Hoodie 'Dark Oatmeal'", description: "Made from a cotton-blend fleece, the Fear of God Essentials Hoodie 'Dark Oatmeal' from FW22 is a staple that can be worn year-round.", price: 54.99, img: "/images/essegray.png", type: "Essentials" },
    { id: 12, title: "Fear of God Essentials Hoodie 'Light Oatmeal'", description: "Fear of God Essentials focuses on lasting staples that complement the brand's mainline collections.", price: 49.99, img: "/images/essewhite.png", type: "Essentials" }
  ];

  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [priceRange, setPriceRange] = useState('');
  const [productType, setProductType] = useState('');

  useEffect(() => {
    filterProducts();
  }, [priceRange, productType]);

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
            <option value="Jordans">Jordans</option>
            <option value="Nike">Nike</option>
            <option value="Bape">Bape</option>
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
