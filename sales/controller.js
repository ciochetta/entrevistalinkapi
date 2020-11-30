const { get_pipedrive_won_deals } = require("./utils/getPipedriveDeals")
const { get_bling_sales } = require("./utils/getBlingSales")
const { compare_pipedrive_deals_with_cache } = require("./utils/comparePipedriveDeals")

async function get_consolidated_sales_data(){

  const won_pipedrive_deals = await get_pipedrive_won_deals();


  const pipedrive_changes = compare_pipedrive_deals_with_cache(won_pipedrive_deals)

  if(pipedrive_changes.to_modify.length === 0 && pipedrive_changes.to_add.length === 0){


    //se baterem, retornar resposta no cache

  }

  return pipedrive_changes


  //caso contrário, encontrar as diferenças

  //registrar novas vendas

  //modificar vendas que tenham sido alteradas

  //salvar mudanças em cache











  //retornar

}

module.exports = { get_consolidated_sales_data  };
