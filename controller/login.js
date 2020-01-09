const md5 = require("md5-node");
const model = require("../model/user");
const user = model.user;
const connection = model.connection;
const path = require("path");

class loginController {
  async showLogin(req, res, next) {
    res.sendFile("login.html", {
      root: path.resolve(__dirname, "../views")
    });
  }

  async login(req, res, next) {
    const param = req.body;
    user.find({
        username: param.name,
        password: md5(param.pwd)
      },
      (err, user) => {
        if (err) {
          return;
        }
        if (user && user.length > 0) {
          req.session.user = user[0];
          connection.close(() => {
            console.log("登录成功，连接断开")
          });
          res.redirect("/main");
        } else {
          res.send(
            "<script>alert('登录失败');location.href='/login';</script>"
          );
        }
        // db.close();
      }
    );
  }
}

module.exports = new loginController();
