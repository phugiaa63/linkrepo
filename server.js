const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');
const redirectRoute = require('./src/routes/redirectRoute');

require('dotenv').config(); // Để đọc biến môi trường từ .env

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors())
// Kết nối MongoDB
connectDB();

app.use('/', redirectRoute);

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
