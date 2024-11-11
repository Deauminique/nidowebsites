const { body, validationResult } = require('express-validator');

exports.validateContactSubmission = [
  // Name validation
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Naam is verplicht')
    .isLength({ min: 2, max: 100 })
    .withMessage('Naam moet tussen 2 en 100 karakters zijn'),

  // Email validation
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is verplicht')
    .isEmail()
    .withMessage('Voer een geldig emailadres in')
    .normalizeEmail(),

  // Subject validation
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Onderwerp is verplicht')
    .isLength({ min: 2, max: 200 })
    .withMessage('Onderwerp moet tussen 2 en 200 karakters zijn'),

  // Message validation
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Bericht is verplicht')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Bericht moet tussen 10 en 2000 karakters zijn'),

  // Validation result middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        errors: errors.array().map(err => ({
          field: err.param,
          message: err.msg
        }))
      });
    }
    next();
  }
];
