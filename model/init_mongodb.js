const md5 = require("md5-node");
const User = require("../model/user");

var admin = new User({
  username: "root",
  password: md5(admin)
});

var test = new User({
  username: "test",
  password: md5(test)
});

admin.save(function(err) {
  if (err) console.log(err);
});

test.save(function(err) {
  if (err) console.log(err);
});
