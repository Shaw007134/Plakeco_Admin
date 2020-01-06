let http = require('http');
let cheerio = require('cheerio');
let Weather = require('./mongodb_weather')

var url = "http://www.nmc.cn/publish/forecast/AAH/hefei.html";

http.get(url, (res) => {
  // Do stuff with response
  var html = '';
  var results = [];
  res.setEncoding('utf-8')
  res.on('data', (data)=>{
    html += data;
  });
  res.on('end', function(){
    var $ = cheerio.load(html);

    var time = $('.first','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var temperature = $('.wd','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var rainfall = $('.js','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var windspeed = $('.winds','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var winddirection = $('.windd','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var airpressure = $('.qy','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());
    var humidity = $('.xdsd','#day0').text().replace(/(\n)/g,'').split('                       ').map(x => x.trim());

    for (var i = 1; i < time.length; i++) {
      var weather_db = new Weather({
        time: time[i],
        temperature: temperature[i],
        rainfall: rainfall[i],
        windspeed: windspeed[i],
        winddirection: winddirection[i],
        airpressure: airpressure[i],
        humidity: humidity[i]
      });
      weather_db.save(function (err) { 
        if(err) console.log(err);
       })
    }
  })
});
