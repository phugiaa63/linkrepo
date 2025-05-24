// Dữ liệu map code → original base URL (tạm hardcode)
const linkMap = {
  'abc123': 'https://kisxgs.md1jik01.com/home/?inviteCode=1837247#',
  'xyz456': 'https://playy-hjt.club'
};

/**
 * Trả về base URL tương ứng với code
 * @param {string} code - Mã rút gọn
 * @returns {string|null}
 */
function getOriginalUrl(code) {
  return linkMap[code] || null;
}

module.exports = {
  getOriginalUrl
};
