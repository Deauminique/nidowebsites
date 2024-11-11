const express = require('express');
const { submitContactForm, getContactSubmissions } = require('../controllers/contactController');
const { validateContactSubmission } = require('../middleware/contactValidation');

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', validateContactSubmission, submitContactForm);

// GET /api/contact - Get all contact submissions (protected route for admin)
router.get('/', getContactSubmissions);

module.exports = router;
