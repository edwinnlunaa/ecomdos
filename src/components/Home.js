import React from 'react';
import '../styles/Home.css'; 
import '../styles/Carousel.css';
import hero from '../images/homeimg.png'
import jordanlogo from "../images/jordanlogo.png"
import bapelogo from "../images/bapelogo.png"
import nikelogo from "../images/nikelogo.png"
import essentialslogo from "../images/esselogo.png"
import HomeCarousel from './HomeCarousel';



const Home = () => {
  return (
    <>
    <div className="home-image">
  <img src={hero} alt="Sneakers" />
</div>
<div className="title">
  <h2>GRAILKICKSCLT</h2>
</div>
<div className="aboutus">
  <h1>About Us</h1>
  <p>Welcome to GrailKicksCLT, where sneaker passion and streetwear meets curated style. Founded by a team of dedicated sneaker enthusiasts and hypebeasts, we strive to provide an unparalleled platform for sneakerheads worldwide. With a focus on authenticity, rarity, and premium quality, we connect buyers and sellers in a vibrant community driven by a shared love for sneakers and clothes. Whether you're hunting for that elusive pair or looking for fly outfit, GrailKicksCLT is your ultimate destination for all things hypebeast culture.</p>
</div>
<div className="shopbybrand">
  <h2>Shop by Brand</h2>
  <a>
    <img src={jordanlogo} alt="Jordan Logo" />
  </a>
  <a>
    <img src={bapelogo} alt="Bape Logo" />
  </a>
  <a>
    <img src={nikelogo} alt="Nike Logo" />
  </a>
  <a>
    <img src={essentialslogo} alt="Essentials Logo" />
  </a>
</div>
<div className="best-sellers">
  <h2>Best Sellers</h2>
  <HomeCarousel />
  <div id="product-container" className="container"></div>
</div>
    </>
  );
};

export default Home;
