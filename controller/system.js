class systemController {
  async findAll(req, res, next) {
    res.json({
      root: 'admin'
    });
  }

  async updateAuth(req, res, next) {
    res.render("usercenter", {});
  }

}

module.exports = new systemController();
