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
//获取模型页面权限
router.get('/modelmanage', auth.authUserPermission, main.modelmanage);
router.get('/modelview', auth.authUserPermission, main.modelview);
//获取系统权限
router.get('/find', auth.authSystemPermission, system.find);
//更新系统权限
router.post('/update', auth.authSystemPermission, system.update);
//删除系统权限
router.post('/delete', auth.authSystemPermission, system.delete);

//注销
router.get('/logout', login.logout);
router.get('/usercenter', main.usercenter)
module.exports = router;
