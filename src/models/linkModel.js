const linkMap = {
  'abc123': {
    mobile: 'https://www.betoo99.site/mble2',
    // https://www.webcake.me/demo/v4/8a75a949-59a1-4a4e-91d7-4290216fa88f
    desktop: 'https://www.betoo99.site/desktp12'
    // https://www.webcake.me/demo/v4/236ed95d-e6bd-43af-a7c4-f88131bd7c0c
  }
};

function getOriginalUrl(code) {
  return linkMap[code] || null;
}

module.exports = {
  getOriginalUrl
};
