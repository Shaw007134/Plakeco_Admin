const express = require('express');
const http = require('http');
const app = express();
const port = 10002;
const url = 'http://www.nmc.cn/f/rest/passed/58321';

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}
app.use(allowCrossDomain);

app.get('/realtime',(req,res)=>{
  http.get(url, (x) => {
    // Do stuff with response
    x.setEncoding('utf8');
    var rawData;
    x.on('data', (data)=>{
      rawData += data;
    });
    x.on('end', ()=>{
      try {
        res.send(rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
  });
});


var server = app.listen(port, '127.0.0.1',function(){
  // var host = server.address().address;
  console.log(`App listening on ${port}`);
})
