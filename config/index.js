const convict = require('convict');

const config = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'DB_HOST',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'node_dependency_injection',
      env: 'DB_NAME',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: '<put your postgres database user here>',
      env: 'DB_USER',
    },
    port: {
      doc: 'database port',
      format: 'port',
      // note that this can be overriden depending on what environment you run on
      // please check out local.json and test.json and production.json
      default: 5432,
      env: 'DB_PORT',
    },
    password: {
      doc: 'database password',
      format: '*',
      default: null,
      env: 'DB_PASSWORD',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = {
  ...config.getProperties(),
};
