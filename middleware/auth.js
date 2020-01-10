class auth {
  // 用户登陆检测
  async loginRequired(req, res, next) {
    // console.log("登录检测");
    const currPath = req.url;
    if (currPath === "/login") {
      next();
    } else {
      if (!req.session || !req.session.user || !req.session.user.username) {
        return res.redirect('/login');
      } else {
        req.app.locals["userName"] = req.session.user.username;
        req.app.locals["page_url"] = req.session.user.page_url;
        req.app.locals["system_url"] = req.session.user.system_url;
        // console.log(req.app.locals);
        next();
      }
    }
  }

  //获取用户权限
  async authUserPermission(req, res, next) {
    console.log("用户权限检测");
    let targetUrl = req.route.path;
    let hasAuth = false;
    req.app.locals["page_url"].some(el => {
      if (el.path == targetUrl && el.hasAuth === true) {
        hasAuth = true;
      }
    });
    if (!hasAuth) {
      if (req.xhr) {
        return res.json({
          state: false,
          msg: "抱歉，您无此权限！请联系管理员"
        });
      }
      return res.send('抱歉，您无此权限！请联系管理员');
    }
    console.log("用户检测通过");
    next();
  }
  //获取系统权限
  async authSystemPermission(req, res, next) {
    console.log("系统权限检测");
    let targetUrl = req.route.path;
    let hasAuth = false;
    if (req.app.locals["userName"] === 'root' || req.app.locals["userName"] === 'test' && targetUrl === '/find') {
      hasAuth = true;
      console.log("系统检测通过");
    }
    if (!hasAuth) {
      if (req.xhr) {
        return res.json({
          state: false,
          msg: "抱歉，您无此权限！请联系管理员"
        });
      }
      return res.send('抱歉，您无此权限！请联系管理员');
    }
    next();
  }
}

module.exports = new auth();
