const awilix = require('awilix');
const DevController = require('./controller/dev');
const DevService = require('./service/dev');
const DevDao = require('./dao/dev');
const db = require('./db');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    devController: awilix.asClass(DevController),

    // services
    devService: awilix.asClass(DevService),

    // DAOs
    devDao: awilix.asClass(DevDao),

    // inject knexjs object with database connection pooling
    // support
    db: awilix.asValue(db),
  });
}

module.exports = {
  container,
  setup,
};
