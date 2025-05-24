const { getOriginalUrl } = require('../models/linkModel');
const { isBot, isGoogleBot } = require('../utils/botDetector');
const path = require('path');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  const originalUrls = getOriginalUrl(code);
  if (!originalUrls) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  // Cho phép Googlebot (bao gồm cả AdsBot-Google) redirect bình thường
  if (isGoogleBot(userAgent)) {
    const googleRedirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
    return res.redirect(302, googleRedirectUrl);
  }

  // Chặn các bot khác (Facebook, Bing, Yandex...)
  if (isBot(userAgent)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.sendFile(path.join(__dirname, '../static/fallback.html'));
  }

  // Người dùng thật → redirect bình thường
  const redirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
  return res.redirect(302, redirectUrl);
}

module.exports = {
  handleRedirect
};
