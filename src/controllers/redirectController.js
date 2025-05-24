const { getOriginalUrl } = require('../models/linkModel');
const { isStrictBot, isGoogleBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  const originalUrls = getOriginalUrl(code);
  if (!originalUrls) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  // Cho phép Googlebot và AdsBot-Google redirect bình thường
  if (isGoogleBot(userAgent)) {
    const googleRedirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
    return res.redirect(302, googleRedirectUrl);
  }

  // Chặn các bot khác
  if (isStrictBot(userAgent)) {
    return res.send(`
      <!DOCTYPE html>
      <html lang="vi">
        <head>
          <meta charset="UTF-8" />
          <title>Thông tin</title>
        </head>
        <body>
          <h1>Trang giới thiệu</h1>
          <p>Đây là nội dung thay thế được hiển thị cho trình thu thập dữ liệu không được hỗ trợ.</p>
        </body>
      </html>
    `);
  }

  // Người dùng thật → redirect bình thường
  const redirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
  return res.redirect(302, redirectUrl);
}

module.exports = {
  handleRedirect
};
