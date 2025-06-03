const path = require('path');
const { isBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const userAgent = req.get('User-Agent') || '';
  const targetUrl = process.env.TARGET_URL || 'https://sao789a.to/';

  // Nếu là bot -> trả về trang giả
  if (isBot(userAgent)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.sendFile(path.join(__dirname, '../../static/fallback.html'));
  }

  // Người dùng thật -> chuyển hướng đến landing thật
  return res.redirect(302, targetUrl);
}

module.exports = {
  handleRedirect
};
