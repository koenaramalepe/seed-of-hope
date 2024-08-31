// server.js

const express = require('express');
const db = require('./database'); // Import the SQLite database connection
const path = require('path');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



// Route to handle donation submissions
app.post('/submit_donation', (req, res) => {
  const {
    donationFrequency,
    donationType,
    foodType,
    expiryDate,
    quantity,
    donationName,
    donationEmail,
    donorType
  } = req.body;

  const donation_date = new Date().toISOString();

  const sql = `INSERT INTO donations (
    donor_name, donor_email, donor_type, donation_type, 
    food_type, expiry_date, quantity, donation_frequency, donation_date
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    donationName, donationEmail, donorType, donationType, 
    foodType, expiryDate, quantity, donationFrequency, donation_date
  ];

  db.run(sql, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Donation added successfully', donationId: this.lastID });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
