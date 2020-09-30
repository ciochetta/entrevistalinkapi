const got = require('got');

const pipedrive_token = process.env.PIPEDRIVE_TOKEN;
const pipedrive_company_domain = process.env.PIPEDRIVE_COMPANY_NAME;

const pipedrive_deals_url = `https://${pipedrive_company_domain}.pipedrive.com/api/v1/deals?api_token=${pipedrive_token}`

async function get_pipedrive_deals() {

  const deals = await got(pipedrive_deals_url);

  return JSON.parse (deals.body).data;
}


module.exports = { get_pipedrive_deals };
