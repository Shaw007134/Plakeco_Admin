let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usermanage', {
  useNewUrlParser: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('数据库连接成功');
});
let Schema = mongoose.Schema;
let user = new Schema({
  username: String,
  password: String,
  page_url: []
});
module.exports = mongoose.model('User', User);
