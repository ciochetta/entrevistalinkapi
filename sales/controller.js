const { get_pipedrive_deals } = require("./utils/getPipedriveDeals")
const { get_bling_sales } = require("./utils/getBlingSales")


async function get_consolidated_sales_data(){

  const pipedrive_deals = get_pipedrive_deals();

  return pipedrive_deals

  //comparar os dados do pipedrive com o que eu tenho no cache

  //se baterem, retornar resposta no cache

  //caso contrário, encontrar as diferenças

  //registrar novas vendas

  //modificar vendas que tenham sido alteradas ?

  //salvar mudanças em cache

  //retornar

}

module.exports = { get_consolidated_sales_data  };
