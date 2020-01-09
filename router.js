const router = require('express').Router();
const auth = require('./middleware/auth');
const cors = require("./middleware/cors")
const login = require('./controller/login');
const main = require('./controller/main');
const system = require('./controller/system');
const fetch = require('./controller/fetch');

//CORS设置
router.use(cors.cors);
//获取天气数据
router.get('/realtime', fetch.realtime);
//登录检测
router.use(auth.loginRequired);

//登录
router.get('/login', login.showLogin);
router.post('/login', login.login);
//显示主页面
router.get('/main', main.showMain);
//获取用户权限
router.get('/modelmanage', auth.authUserPermission, main.modelmanage);
//获取所有用户权限
router.get('/findAll', auth.authSystemPermission, system.findAll);
//注销
router.get('/logout', login.logout);
router.get('/usercenter', main.usercenter)
module.exports = router;
