class ApiError {
  constructor(code, message) {
    this.message = message;
    this.code = code;
  }

  static notFound(msg) {
    return new ApiError(404, msg);
  }

  static internal(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;
