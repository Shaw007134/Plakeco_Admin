let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let fileW = new Schema({
  time: String,
  temperature: String,
  rainfall: String,
  windspeed: String,
  winddirection: String,
  airpressure: String,
  humidity: String,
});
let Weather = mongoose.model('Weather',fileW);
let db = mongoose.connect('mongodb://127.0.0.1:27017/weather');
db.connection.on('error', (err)=>{
  console.log(`数据库连接失败：${err}`);
})
db.connection.on('open', () => {
  console.log('数据库连接成功');
});

module.exports = {Film: Film};
