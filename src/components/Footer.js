import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer logo">
            <img className="logo-footer" src="/images/gkclt.png" alt="gkcltlogo" />
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/grailkicksclt/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="instagram" />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="twitter" />
            </a>
            <p>@ 2024, GrailKicksClt</p>
        </div>
    </footer>
  );
};

export default Footer;