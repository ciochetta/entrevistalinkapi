const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URL;

let client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true   });
let connection;
let database;

async function init_db(){
  client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true   });

  try {
    connection = await client.connect();
    database = await client.db('LinkApi');
    console.log("Connected");

  } catch (e) {
    console.log(e);

  }

  return database;
}

async function get_db() {
  return database || await init_db()
}

module.exports = {
    init_db,
    get_db
};
