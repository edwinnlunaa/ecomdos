// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the necessary modules
const express = require('express'); // For creating the server
const mysql = require('mysql2'); // For connecting to the MySQL database
const cors = require('cors'); // For handling Cross-Origin Resource Sharing

// Create an instance of an Express app
const app = express(); 

// Define the port on which the server will run
const port = process.env.PORT || 5000; 

// CORS middleware setup to allow requests from the specified origin
app.use(cors({
  origin: 'https://grailkicksclt.onrender.com' 
}));

// Database connection setup using credentials from environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT || 3306 // Database port, default to 3306 
});

// Connect to the database and handle any errors
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err); // Log error if connection fails
    process.exit(1); // Exit the process with a failure code
  }
  console.log('Connected to the database'); // Log success message if connected
});

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Define a route to get all products from the database
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message }); // Return error if query fails
    }
    res.json(results); // Return the query results as JSON
  });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Log message when server is running
});
