const ApiError = require('../error/api-error');

class DevController {
  constructor({ devService }) {
    this.devService = devService;

    this.createDev = this.createDev.bind(this);
    this.getDev = this.getDev.bind(this);
  }

  async createDev(req, res) {
    try {
      const result = await this.devService.createDev(req.body);
      console.log(`result from insert ${result}`);
      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json('error');
    }
  }

  async getDev(req, res, next) {
    try {
      const developerId = req.params.id;
      const developer = await this.devService.getDev(req.params.id);
      if (developer == null) {
        next(ApiError.notFound(`developer with id ${developerId} not found`));
        return;
      }
      res.json(developer);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = DevController;
