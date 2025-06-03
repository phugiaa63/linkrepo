const express = require('express');
const cors = require('cors');
const redirectRoute = require('./src/routes/redirectRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Route chính cho redirect
app.use('/', redirectRoute);

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
