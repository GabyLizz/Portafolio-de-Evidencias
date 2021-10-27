const express = require('express');
const router = express.Router();

// Define modules/handlers of API
router.use('/usuario', require('./usuario'));
router.use('/marca', require('./marca'));

module.exports = router;