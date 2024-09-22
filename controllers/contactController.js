// controllers/contactController.js
const Contact = require('../models/Contact');

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    res.status(200).json({ message: 'Ticket submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again' });
  }
};
