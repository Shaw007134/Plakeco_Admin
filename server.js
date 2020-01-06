const express = require('express');
const app = express();
const port = 10001;
const Weather = require('./mongodb_weather')


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}
app.use(allowCrossDomain);
app.get('/forecast',(req,res)=>{
  Weather.find((err, weather)=>{
    if (err) return console.error(err);
    weather = weather.map(element => {
      let {time, temperature, rainfall, windspeed, winddirection, airpressure, humidity} = element;
      return {
        time: time,
        temperature: temperature,
        rainfall: rainfall,
        windspeed: windspeed,
        winddirection: winddirection,
        airpressure: airpressure,
        humidity: humidity
      }
    });
    res.json(weather);
  })
})


var server = app.listen(port, '127.0.0.1',function(){
  // var host = server.address().address;
  console.log(`App listening on ${port}`);
})
