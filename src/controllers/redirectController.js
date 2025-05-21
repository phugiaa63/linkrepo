const { getOriginalUrl } = require('../models/linkModel');
const { isBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';

  if (isBot(userAgent)) {
    return res.status(403).json({ error: 'Access Denied' });
  }

  const originalUrl = getOriginalUrl(code);
  if (!originalUrl) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  return res.json({ originalUrl });     
}

module.exports = {
  handleRedirect
};
