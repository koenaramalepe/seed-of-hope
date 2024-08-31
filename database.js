// database.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./donations.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    donor_name TEXT,
    donor_email TEXT,
    donor_type TEXT,
    donation_type TEXT,
    food_type TEXT,
    expiry_date TEXT,
    quantity INTEGER,
    donation_frequency TEXT,
    donation_date TEXT
  )`, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Donations table created or already exists.');
    }
  });
});

module.exports = db;

