const model = require("../model/user");

class systemController {
  async find(req, res, next) {
    let json = {};
    if (req.app.locals["userName"] !== 'root') {
      json = {
        username: req.app.locals["userName"]
      }
    }
    model.find('users', json, (err, data) => {
      res.json(data);
    })
  }

  async update(req, res, next) {
    console.log(req.body);
    let json1 = {
      username: req.body.username
    }

    let json2 = {};
    json2[Object.keys(req.body)[1]] = Object.values(req.body)[1];
   
    console.log(json2);
    model.addTo('users', json1, json2, (err, data) => {
      res.json(data);
    })
  }

}

module.exports = new systemController();
