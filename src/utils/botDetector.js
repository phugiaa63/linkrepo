function isBot(userAgent) {
  if (!userAgent) return true;
  const botRegex = /bot|crawler|spider|robot|crawling|facebookexternalhit|bingpreview|slurp|duckduckbot|embedly|quora|pinterest|yahoo|baiduspider|yandex/i;
  return botRegex.test(userAgent);
}

function isGoogleBot(userAgent) {
  if (!userAgent) return false;
  return /googlebot|adsbot-google/i.test(userAgent);
}

module.exports = { isBot, isGoogleBot };
