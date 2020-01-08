class allowCrossDomain {
  async cors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }
}

module.exports = new allowCrossDomain();
