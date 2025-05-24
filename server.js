const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/config/database');
const redirectRoute = require('./src/routes/redirectRoute');
const landingRoute = require('./src/routes/landingRoute'); // Nếu bạn có
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Kết nối MongoDB
connectDB();

// Cho phép CORS
app.use(cors());

// Phục vụ landing page nếu có (ví dụ static HTML export từ Webcake)
app.use('/landing', express.static(path.join(__dirname, 'public')));

// Route chính cho redirect
app.use('/', redirectRoute);

// Nếu có route riêng để test landing page hoặc gửi HTML
app.use('/landing-api', landingRoute); // Tuỳ bạn có dùng hay không

// Start server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
