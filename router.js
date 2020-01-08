const router = require('express').Router();
const auth = require('./middleware/auth');
const login = require('./controller/login');
const system = require('./controller/system');
const fetch = require('./controller/fetch');

//获取天气数据
router.get('/realtime', fetch.realtime)

module.exports = router;
