const express = require('express');
const { handleRedirect } = require('../controllers/redirectController');

const router = express.Router();

// Route điều hướng qua code
router.get('/:code', handleRedirect);

// Route gốc không có code → lỗi
router.get('/', (req, res) => {
  res.status(400).json({ error: 'Thiếu mã code để điều hướng' });
});

module.exports = router;
