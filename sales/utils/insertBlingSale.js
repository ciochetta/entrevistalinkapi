const got = require('got');

const { register_sale } = require('../db');

const bling_token = process.env.BLING_TOKEN;
const insert_bling_sales_url = `https://bling.com.br/Api/v2/pedidos/json/`


async function insert_bling_sale(pipedrive_deal) {

  console.log(pipedrive_deal);
  try {
    const request = await got.post(insert_bling_sales_url);


  } catch (e) {
    console.log(e);

  }



// campos obrigatórios:
// pedido
//  cliente
//    nome

  return
}


module.exports = { insert_bling_sale }
