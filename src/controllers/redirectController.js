const { getOriginalUrl } = require('../models/linkModel');
const { isBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  if (isBot(userAgent)) {
    return res.status(403).json({ error: 'Truy cập bị từ chối (Bot bị chặn)' });
  }

  const originalUrls = getOriginalUrl(code);
  if (!originalUrls) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  const redirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
  return res.redirect(302, redirectUrl);
}

module.exports = {
  handleRedirect
};
