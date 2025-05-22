const express = require('express');
const router = express.Router();
const handleLandingRedirect = require('../controllers/landingRedirectController').handleLandingRedirect;

router.get('/go', handleLandingRedirect);

module.exports = router;
