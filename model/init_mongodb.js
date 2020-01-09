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
  }],
  system_url: [{
      name: '权限查看',
      hasAuth: true,
      path: '/findAll'
    },
    {
      name: '权限管理',
      hasAuth: true,
      path: '/updateAuth'
    }
  ]
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
  }],
  system_url: [{
    name: '权限查看',
    hasAuth: true,
    path: '/find'
  }]
};

model.update('users', {
  username: 'root'
}, admin,(err, data)=>{
  console.log("更新完成")
})
model.update('users', {
  username: 'test'
}, test,(err, data)=>{
  console.log("更新完成")
})
