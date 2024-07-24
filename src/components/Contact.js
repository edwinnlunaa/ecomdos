// Import React and useState hook, and CSS file for styling
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // State variables to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the input fields
    if (validateName() && validateEmail() && validateMessage()) {
      alert('Form submitted successfully!'); // Show success message
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // Function to validate the name field
  const validateName = () => {
    const trimmedName = name.trim(); // Remove leading/trailing whitespace
    if (trimmedName === '') {
      alert('Please enter your name.'); // Show error message if name is empty
      return false;
    }
    return true;
  };

  // Function to validate the email field
  const validateEmail = () => {
    const trimmedEmail = email.trim(); // Remove leading/trailing whitespace
    // Regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      alert('Please enter a valid email address.'); // Show error message if email is invalid
      return false;
    }
    return true;
  };

  // Function to validate the message field
  const validateMessage = () => {
    const trimmedMessage = message.trim(); // Remove leading/trailing whitespace
    if (trimmedMessage === '') {
      alert('Please enter your message.'); // Show error message if message is empty
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
            onChange={(e) => setName(e.target.value)} // Update name state on input change
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update message state on input change
          ></textarea>
          <button type="submit" id="submit-btn">Submit</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
