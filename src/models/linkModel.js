const linkMap = {
  'abc123': {
    mobile: 'https://www.betoo99.site/mble2',
    desktop: 'https://www.betoo99.site/desktp12'
  }
};

function getOriginalUrl(code) {
  return linkMap[code] || null;
}

module.exports = {
  getOriginalUrl
};
