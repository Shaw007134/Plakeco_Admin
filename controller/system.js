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
    let keys = Object.keys(req.body)
    if (keys.length > 2) {
      json2[keys[1]] = req.body[keys[1]];
    } else if (keys.length === 2) {
      let values = req.body[keys[1]];
      if (values.hasAuth === 'true') {
        values.hasAuth = true;
      }
      json2[keys[1]] = req.body[keys[1]];
    } else {
      json2['username'] = req.body.username
    }
    console.log(json2)
    model.addTo('users', json1, json2, (err, data) => {
      res.json(data);
    })
  }

  async delete(req, res, next) {
    console.log(req.body);
    let json1 = {
      username: req.body.username
    }
    let json2 = {};
    let keys = Object.keys(req.body)
    if (keys.length > 2) {
      json2[keys[1]] = req.body[keys[1]];
    } else if (keys.length === 2) {
      let values = req.body[keys[1]];
      if (values.hasAuth === 'true') {
        values.hasAuth = true;
      }
      json2[keys[1]] = req.body[keys[1]];
    } else {
      json2['username'] = req.body.username
    }
    console.log(json2)
    model.pull('users', json1, json2, (err, data) => {
      res.json(data);
    })
  }

}

module.exports = new systemController();
