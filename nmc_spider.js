let http = require('http');
let fs = require('fs');
let cheerio = require('cheerio');
let request = require('request');
// let mongo = require('./mongodb_weather')

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
    var data = {  time:'',
      temperature:'',
      rainfall:'',
      windspeed:'',
      winddirection:'',
      airpressure:'',
      humidity:''};
    var weather = $('.js','#day0').text().trim().replace(/(\n)/g,'').split('                       ');
    console.log(weather);
  })
  
});
