// Dữ liệu link bọc tạm thời (thay thế bằng DB sau này)
const linkMap = {
  'abc123': 'https://kisxgs.md1jik01.com/home/?inviteCode=1837247#/',
  'xyz456': 'https://playy-hjt.club/'
};

function getOriginalUrl(code) {
  return linkMap[code] || null;
}

module.exports = {
  getOriginalUrl
};
