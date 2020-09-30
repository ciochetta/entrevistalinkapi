const sales_db = require('./sales/db');

let cache = {};

function get(key) {
  return cache[key];
}

function set(key, val) {
  console.log("Object " + key + " cached");
  cache[key] = val;
}

async function init_cache() {



  await require('./sales/db').get_sales();

}


module.exports = { get, set, init_cache}
