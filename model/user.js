let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usermanage', {
  useNewUrlParser: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('用户数据库连接成功');
});
let Schema = mongoose.Schema;
let user = new Schema({
  username: String,
  password: String,
  page_url: []
});
const connection = db;
module.exports.connection = connection;
module.exports.user = mongoose.model('user', user);
