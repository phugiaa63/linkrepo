function isBot(userAgent) {
  if (!userAgent) return true;

  const botRegex = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|bingpreview|slurp|duckduckbot|embedly|quora|pinterest|yahoo|baiduspider|yandex/i;
  return botRegex.test(userAgent);
}

module.exports = { isBot };
