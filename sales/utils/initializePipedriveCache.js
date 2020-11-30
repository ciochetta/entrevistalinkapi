const { get_pipedrive_won_deals } = require('./getPipedriveDeals');

async function initialize_pipedrive_cache(set_cache_function){

  const won_deals = await  get_pipedrive_won_deals();

  set_cache_function('pipedrive_won_deals', won_deals)

}

module.exports = { initialize_pipedrive_cache }
