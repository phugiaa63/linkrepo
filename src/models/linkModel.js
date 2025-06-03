const linkMap = {
  'abc123': {
    mobile: 'https://www.finbiz88.site/',
    desktop: 'https://www.finbiz88.site/',
    description: 'FinBiz88 - Your one-stop solution for financial news and updates.'
  }
};

function getOriginalUrl(code) {
  return linkMap[code] || null;
}

module.exports = {
  getOriginalUrl
};
