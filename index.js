require('dotenv').config()

const server = require('./server')
const db = require('./db');
const cache = require('./memoryCache')

server.listen(3000, async () => {
    console.log("Server on, listning on port 3000");

    console.log("Initializing database connection...");
    await db.init_db()

    console.log("Initializing cache...");
    await cache.init_cache()
});
