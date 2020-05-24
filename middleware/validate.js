const ApiError = require('../error/api-error');

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(ApiError.badRequest(error));
      return;
    }

    // replace request body with validated value
    // because then we have applied defaults
    req.body = value;
    next();
  };
}

module.exports = validate;
