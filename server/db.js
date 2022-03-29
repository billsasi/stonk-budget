const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

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
