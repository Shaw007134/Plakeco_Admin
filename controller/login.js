const md5 = require("md5-node");
const model = require("../model/user");

class loginController {
  async showLogin(req, res, next) {
    res.render("login", {});
  }

  async login(req, res, next) {
    const param = req.body;
    model.find(
      "users",
      {
        username: param.name,
        password: md5(param.pwd)
      },
      (err, data) => {
        console.log("连接数据库");
        if (err) {
          return;
        }
        if (data && data.length > 0) {
          req.session.user = data[0];
          res.redirect("/main");
        } else {
          res.send(
            "<script>alert('登录失败');location.href='/login';</script>"
          );
        }
      }
    );
  }

  async logout(req, res, next) {
    req.session.destroy(err => {
      if (err) console.log(err);
      else res.redirect("/login");
    });
  }
}

module.exports = new loginController();
