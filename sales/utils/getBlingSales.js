const got = require('got');

const bling_token = process.env.BLING_TOKEN;
const get_bling_sales_url = `https://bling.com.br/Api/v2/pedidos/json/&apikey=${bling_token}`

async function get_bling_sales() {
  const sales = await got(get_bling_sales_url);

  return JSON.parse(sales.body);
}


module.exports = { get_bling_sales };
