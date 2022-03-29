const getDb = require('./db');

async function handleGetTransactions() {
  const db = await getDb();
  const tasks = db.collection('listingsAndReviews');
  const arr = await tasks.find({});
  return arr;
}

module.exports = handleGetTransactions;
