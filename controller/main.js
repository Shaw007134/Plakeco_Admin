const path = require("path");

class mainController {
  async showMain(req, res, next) {
    res.sendFile("main.html", {
      root: path.resolve(__dirname, "../views")
    });
  }
}

module.exports = new mainController();

