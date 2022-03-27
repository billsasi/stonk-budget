const express = require('express');
const { urlencoded } = require('express');
const getDb = require('./db');
const app = express();

const PORT = 3000;

app.use(urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
