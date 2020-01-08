const router = require('express').Router();
const user = require('./model/user');
const auth = require('./middleware/auth');
const cors = require("./middleware/cors")
const login = require('./controller/login');
const system = require('./controller/system');
const fetch = require('./controller/fetch');

//CORS设置
router.use(cors.cors);
//获取天气数据
router.get('/realtime', fetch.realtime);

//登陆
// router.get('/login', login.showLogin);
// router.post('/login', login.login);
//登陆后显示主页面
router.use(auth.loginRequired);
router.get('/main', main.showMain);
//获取用户权限
router.get('/userList', auth.authUserPermission, main.showList);

module.exports = router;
