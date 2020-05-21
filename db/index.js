const knexjs = require('knex');
const config = require('../config');

const db = knexjs({
  client: 'pg',
  connection: {
    host: config.db.host,
    user: config.db.user,
    port: config.db.port,
    password: null,
    database: config.db.name,
  },
  pool: { min: 0, max: 10 },
});
console.log('db config');
console.log(config.db);

module.exports = db;