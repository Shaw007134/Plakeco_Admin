const md5 = require("md5-node");
const db = require("../model/user");

class loginController {
  async showLogin(req, res, next) {
    res.render("login", {});
  }

  async login(req, res, next) {
    const param = req.body;
    console.log(param.name);
    console.log(md5(param.pwd));
    db.find({
        username: "root",
        password: "5e543256c480ac577d30f76f9120eb74"
      },
      (err, user) => {
        if (err) {
          return;
        }
        if (user && user.length > 0) {
          console.log(user);
          console.log(123);
          req.session.user = user[0];
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
