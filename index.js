require('dotenv').config()

const server = require('./server')
const db = require('./db');
const cache = require('./memoryCache')

const { initialize_sales } = require("./sales/utils/initializeSales")

server.listen(3000, async () => {
    console.log("Initializing database connection...");
    await db.init_db()

    console.log("Initializing cache...");
    await init_cache()

    console.log("Checking for changes and updating...");
    await initialize_sales();

    console.log("Server on, listening on port 3000");
});

async function init_cache() {

  await require('./sales/db').get_sales();
  await require('./sales/utils/initializePipedriveCache').initialize_pipedrive_cache(cache.set);
  await require('./sales/utils/initializeBlingSales').initialize_bling_cache(cache.set);


}
