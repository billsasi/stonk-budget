const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'itemdb';

let client = new MongoClient(url, { useUnifiedTopology: true });
let db;

async function getDb() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = getDb;
