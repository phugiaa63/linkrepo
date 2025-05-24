const { getOriginalUrl } = require('../models/linkModel');
const { isBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  // Nếu là bot thì chặn
  if (isBot(userAgent)) {
    return res.status(403).json({ error: 'Truy cập bị từ chối (Bot bị chặn)' });
  }

  const originalUrl = getOriginalUrl(code);
  if (!originalUrl) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  // Điều hướng theo thiết bị
  const targetSlug = isMobile ? 'slug2' : 'slug1';
  return res.redirect(302, `${originalUrl}/${targetSlug}`);
}

module.exports = {
  handleRedirect
};
