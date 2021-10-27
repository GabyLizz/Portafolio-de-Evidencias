const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
const connectMongoDB = () => mongoose.connect('mongodb://localhost/tecnoshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Welcome route
app.get('/', (req, res) => {
  return res.json({
    message: 'Bienvenido a tecnoShop',
  });
});

// API Routes
app.use('/api', require('./handlers'));

connectMongoDB().then(() => {
  app.listen(3000, () => {
    console.log(`tecnoShop API on port ${3000}`);
  })
});