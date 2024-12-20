// index.js

const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (or Cosmos DB if using)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to database"))
  .catch((err) => console.log("Database connection error: ", err));

// Simple User Model for MongoDB
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
  email: String
}));

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media API!');
});

// Register endpoint (for simplicity, no encryption of password here)
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  // Create a new user
  const newUser = new User({
    username,
    password, // Ideally, use bcrypt for hashing passwords
    email
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Error registering user!" });
  }
});

// Login endpoint (basic)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ error: "Invalid credentials!" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
