function isBot(userAgent) {
  const botRegex = /bot|googlebot|crawler|spider|robot/i;
  return botRegex.test(userAgent);
}

module.exports = { isBot };
