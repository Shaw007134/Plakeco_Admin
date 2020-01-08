const express = require('express');
const app = express();
const router = require('./router');
const port = 10002;

app.use('/', router);

var server = app.listen(port, '127.0.0.1', function () {
  console.log(`App listening on ${port}`);
})
