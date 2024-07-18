import React from 'react';
import '../styles/Footer.css';
import icon from "../images/gkclt.png"
import insta from "../images/instagram.png"
import facebu from "../images/facebook.png"
import twitta from "../images/twitter.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer logo">
            <img className="logo-footer" src={icon} alt="gkcltlogo" />
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={facebu} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/grailkicksclt/" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="instagram" />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <img src={twitta} alt="twitter" />
            </a>
            <p>@ 2024, GrailKicksClt</p>
        </div>
    </footer>
  );
};

export default Footer;
