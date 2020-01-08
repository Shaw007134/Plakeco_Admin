const url = 'http://www.nmc.cn/f/rest/passed/58321';
const http = require('http');

class fetchController {
  async realtime(req, res, next) {
    http.get(url, (x) => {
      const {
        statusCode
      } = x;
      const contentType = x.headers['content-type'];
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
      }
      x.setEncoding('utf8');
      var rawData;
      x.on('data', (data) => {
        rawData += data;
      });
      x.on('end', () => {
        return res.send(rawData);
        // try {
        //   res.send(rawData);
        // } catch (e) {
        //   console.error(e.message);
        // }
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
    })
  }
}

module.exports = new fetchController();
