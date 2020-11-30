const { get } = require("../../memoryCache")

function compare_pipedrive_deals_with_cache(deals_to_compare){

  const cached_deals = get('pipedrive_won_deals');

  let response = {
    to_add: [],
    to_modify: []
  }


  for (var i = 0; i < deals_to_compare.length; i++) {
    const this_deal = cached_deals.find(deal => deal.id === deals_to_compare[i].id);

    if(this_deal === null){
      response.to_add.push(deals_to_compare[i])
    }

    else {
      let changed = get_deal_changed(this_deal, deals_to_compare[i]);

      if(changed){
        response.to_modify.push(deals_to_compare[i])
      }
    }

  }

  return response;

}

function get_deal_changed(cached_deal, request_deal) {
  let changed = false;

  if(cached_deal.value !== request_deal.value){
    changed = true
  }

  if(cached_deal.update_time !== request_deal.update_time){
    changed = true;
  }

  return changed
}

module.exports = { compare_pipedrive_deals_with_cache }
