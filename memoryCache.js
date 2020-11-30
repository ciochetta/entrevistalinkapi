let cache = {};

function get(key) {
  return cache[key];
}

function set(key, val) {
  console.log("Object " + key + " cached");
  cache[key] = val;
}

module.exports = { get, set }
