const express = require('express');
const apiErrorHandler = require('./error/api-error-handler');
const router = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(express.json());
    this.app.use('/', router);
    this.app.use(apiErrorHandler);
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  }

  stop(done) {
    this.server.close(done);
  }
}

module.exports = Server;
