const { getOriginalUrl } = require('../models/linkModel');
const { isBot } = require('../utils/botDetector');

function handleRedirect(req, res) {
  const code = req.params.code;
  const userAgent = req.get('User-Agent') || '';
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);

  const originalUrls = getOriginalUrl(code);
  if (!originalUrls) {
    return res.status(404).json({ error: 'Link không tồn tại' });
  }

  if (isBot(userAgent)) {
    // Trả về một trang HTML hợp lệ nếu là bot
    return res.send(`
      <!DOCTYPE html>
      <html lang="vi">
        <head>
          <meta charset="UTF-8" />
          <title>Trang thông tin</title>
          <style>
          h1 {
            color: #333;
            font-size: 24px;
            text-align: center;
          }
          </style>
        </head>
        <body>
          <h1>LÀM VỎ BÁNH</h1>
          <p>Bạn bắc nồi lên bếp, cho lần lượt bơ, đường, muối và nước vào nồi và đun trên lửa vừa. Khi hỗn hợp sôi và bơ tan ra thì tắt bếp.Các bạn lưu ý trong lúc đun phải khuấy hỗn hợp liên tục.

Các bạn thêm bột mì vào hỗn hợp bơ, dùng thìa gỗ đảo đều cho các nguyên liệu hòa quyện vào nhau.

Tiếp đó bạn cho nồi lên bếp, vừa đun vừa khuấy đều tay. Quan sát thấy bột bắt đầu róc khỏi nồi và hình thành khối dẻo mịn thì tắt bếp.

Bạn nhấc nồi xuống nhưng vẫn phải dùng tay đảo đều khối bột từ 2 – 3 phút để bột bớt nóng.

Bạn đập 2 quả trứng gà vào tô lớn, đánh tan rồi cho 1 nửa lượng trứng này vào hỗn hợp bột, dùng thìa gỗ khuấy đều cho trứng hòa quyện vào hỗn hợp.

Tiếp đó bạn cho hết lượng trứng gà còn lại vào hỗn hợp và tiếp tục dùng thìa gỗ đảo đều đến khi bột thành khối dẻo, đặc và có màu vàng đẹp.</p>
        </body>
      </html>
    `);
  }

  const redirectUrl = isMobile ? originalUrls.mobile : originalUrls.desktop;
  return res.redirect(302, redirectUrl);
}

module.exports = {
  handleRedirect
};
