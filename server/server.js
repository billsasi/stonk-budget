const dotenv = require('dotenv').config({ path: '../.env' });
const express = require('express');
const { urlencoded } = require('express');
const getDb = require('./db.js');

const handleGetTransactions = require('./handleGetTransactions.js');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/transactions', async (req, res) => {
  const data = await handleGetTransactions();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
