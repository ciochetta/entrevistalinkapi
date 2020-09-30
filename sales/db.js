const ObjectId = require('mongodb').ObjectId;
const db_utils = require('../db.js');

const cache = require('../memoryCache');

async function get_sales() {
    let db_conn = await db_utils.get_db();

    let db_entries = await db_conn.collection("sales").find({}).toArray();

    cache.set("sales", db_entries);

    return db_entries;
}

async function register_sale(new_sale_obj) {
  let db_conn = await db_utils.get_db();

  const new_sale_entry = await db_conn.collection("sales").insertOne(new_sale_obj)

  await get_sales();

  return new_sale_entry.ops[0];
}


module.exports = { get_sales, register_sale  };
