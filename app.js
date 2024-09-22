// app.js
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON
app.use(cors()); // Allow Cross-Origin Resource Sharing

// Routes
app.use('/api/contact', contactRoutes);

// Export app
module.exports = app;
