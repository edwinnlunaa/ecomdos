// Import React and the CSS file for styling
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* Footer section */}
      <div className="footer logo">
        {/* Logo image */}
        <img className="logo-footer" src="/images/gkclt.png" alt="gkcltlogo" />

        {/* Social media links */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="facebook" /> {/* Facebook icon */}
        </a>
        <a href="https://www.instagram.com/grailkicksclt/" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="instagram" /> {/* Instagram icon */}
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="twitter" /> {/* Twitter icon */}
        </a>

        {/* Copyright text */}
        <p>@ 2024, GrailKicksClt</p>
      </div>
    </footer>
  );
};

export default Footer;
