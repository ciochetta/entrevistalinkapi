const db = require('../db')
const cache = require('../../memoryCache')

const { insert_bling_sale } = require('./insertBlingSale')

async function initialize_sales(){

  const pipedrive_won_deals = cache.get('pipedrive_won_deals');

  const bling_sales = cache.get('bling_sales');

  for (var i = 0; i < pipedrive_won_deals.length; i++) {

    db_deal_sale = db_sales.find(sale => {
      if (sale.deal_id === null){
        return false
      }

      return sale.deal_id === pipedrive_won_deals[i].id
    })

    if(db_deal_sale === undefined){
      insert_bling_sale(pipedrive_won_deals[i]);
    }
  }

  return;
}

module.exports = { initialize_sales }
