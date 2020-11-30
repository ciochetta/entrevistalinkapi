const { get_bling_sales } = require('./getBlingSales');

async function initialize_bling_cache(set_cache_function){

  const bling_sales = await  get_bling_sales();

  set_cache_function('bling_sales', bling_sales)

}

module.exports = { initialize_bling_cache }
