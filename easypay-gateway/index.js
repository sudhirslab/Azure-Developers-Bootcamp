require('dotenv').config();  // Make sure dotenv is loaded before using process.env

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files for frontend (if needed)
app.use(express.static('public'));

// Route to send the public key to the frontend
app.get('/stripe-public-key', (req, res) => {
    res.json({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
  });

// Route for creating payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // amount in the smallest currency unit, e.g., 1000 for $10
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
