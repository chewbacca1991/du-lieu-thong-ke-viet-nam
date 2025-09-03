const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error(err));

app.get('/api/data', (req, res) => {
  res.send('Data statistics from API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});