const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');
const redirectRoute = require('./src/routes/redirectRoute');
const landingRoute = require('./src/routes/landingRoute');
require('dotenv').config(); // Để đọc biến môi trường từ .env

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors())
// Kết nối MongoDB
connectDB();

app.use('/', redirectRoute);
app.use('/landing', landingRoute);

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
