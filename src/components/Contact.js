import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
<div className="contact">
  <div className="contact-content">
    <h1>Contact Us</h1>
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit" id="submit-btn">Submit</button>
    </form>
  </div>
</div>

  );
};

export default Contact;
