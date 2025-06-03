const express = require('express');
const { handleRedirect } = require('../controllers/redirectController');

const router = express.Router();

// Route điều hướng qua code
router.get('/:code', handleRedirect);

// Route gốc không có code → cũng redirect luôn
router.get('/', handleRedirect);

module.exports = router;
