const md5 = require("md5-node");
const model = require("../model/user");

var admin = {
  username: "root",
  password: md5("admin"),
  page_url: [{
    name: '模型查看',
    hasAuth: true,
    path: '/modelview'
  }, {
    name: '模型管理',
    hasAuth: true,
    path: '/modelmanage'
  }]
};

var test = {
  username: "test",
  password: md5("test"),
  page_url: [{
    name: '模型查看',
    hasAuth: true,
    path: '/modelview'
  }, {
    name: '模型管理',
    hasAuth: false,
    path: '/modelmanage'
  }]
};

model.update('users', {
  username: 'root'
}, admin)
model.update('users', {
  username: 'test'
}, test)
