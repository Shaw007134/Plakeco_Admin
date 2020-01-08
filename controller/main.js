class mainController {
  async showMain(req, res, next) {
    res.render("main", {});
  }
}

module.exports = new mainController();
