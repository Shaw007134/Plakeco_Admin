class mainController {
  async showMain(req, res, next) {
    res.render("main", {
      userName: req.app.locals["userName"],
      listItem: req.app.locals["page_url"],
      systemItem: req.app.locals["system_url"]
    });
  }

  async usercenter(req, res, next) {
    res.render("usercenter", {});
  }

  async modelmanage(req, res, next) {
    res.render("modelmanage", {});
  }
}

module.exports = new mainController();
