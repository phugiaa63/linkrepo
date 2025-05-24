function isStrictBot(userAgent) {
  if (!userAgent) return true;

  // Chỉ chặn các bot gây hại hoặc không cần thiết
  const blockList = /crawler|spider|robot|crawling|facebookexternalhit|bingpreview|slurp|duckduckbot|embedly|quora|pinterest|baiduspider|yandex/i;

  return blockList.test(userAgent);
}

function isGoogleBot(userAgent) {
  if (!userAgent) return false;

  const googleBotList = /googlebot|adsbot-google/i;

  return googleBotList.test(userAgent);
}

module.exports = {
  isStrictBot,
  isGoogleBot
};
