let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('数据库连接成功');
});
let Schema = mongoose.Schema;
let Weather = new Schema({
  time: String,
  temperature: String,
  rainfall: String,
  windspeed: String,
  winddirection: String,
  airpressure: String,
  humidity: String,
});
// let Weather = mongoose.model('Weather',fileW);
module.exports = mongoose.model('Weather',Weather);
