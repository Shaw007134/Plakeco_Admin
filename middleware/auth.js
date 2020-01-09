class auth {
  // 用户登陆检测
  async loginRequired(req, res, next) {
    console.log("登录检测");
    const currPath = req.url;
    if (currPath === "/login") {
      next();
    } else {
      if (!req.session || !req.session.user || !req.session.user.username) {
        return res.redirect('/login');
      } else {
        req.app.locals["userName"] = req.session.user.username;
        // console.log(req.app.locals);
        next();
      }
    }
  }

  //获取用户权限
  async authUserPermission(req, res, next) {
    if (!req.session || !req.session.menu || req.session.menu.length == 0) {
      return res.send('抱歉，您无此权限！请联系管理员');
    }
    let targetUrl = req.route.path;
    let hasPower = false;
    req.session.menu.forEach(el => {
      if (el.page_url == targetUrl) {
        hasPower = true;
      }
    });
    if (!hasPower) {
      return res.send('抱歉，您无此权限！请联系管理员');
    }
    next();
  }
}


module.exports = new auth();
