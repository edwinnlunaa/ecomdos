import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    if (validateName() && validateEmail() && validateMessage()) {
      alert('Form submitted successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // Function to validate name
  const validateName = () => {
    const trimmedName = name.trim();
    if (trimmedName === '') {
      alert('Please enter your name.');
      return false;
    }
    return true;
  };

  // Function to validate email
  const validateEmail = () => {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Function to validate message
  const validateMessage = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
      alert('Please enter your message.');
      return false;
    }
    return true;
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" id="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
