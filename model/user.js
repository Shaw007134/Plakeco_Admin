const MongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017/";

function __connectDB(callback) {
  MongoClient.connect(dbUrl, {
    useNewUrlParser: true
  }, (err, db) => {
    if (err) {
      console.log("数据库连接失败");
      return;
    }
    var user = db.db("usermanage");
    callback(err, user);
    db.close();
  })
}

exports.find = function (collection, option, callback) {
  __connectDB((err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    const result = user.collection(collection).find(option);
    result.toArray((err, data) => {
      callback(err, data);
    })
  })
}
