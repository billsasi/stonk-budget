require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
const path = require('path');

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
const port = 8000;

const users = [];

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection established');
});

const transactionsRouter = require('./routes/transactions');

app.use('/transactions', transactionsRouter);

const update = (arr, data) => {
  const index = arr.findIndex((item) => item.email === data.email);
  if (index > -1) arr[index] = data;
  else arr.push(data);
};
app.post('/api/google-login', async (req, res) => {
  console.log(req.body);
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  update(users, { name, email, picture });
  res.json({ name, email, picture });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
