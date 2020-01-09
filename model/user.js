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
//查找数据
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

//新增数据
exports.insert = function (collection, option, callback) {
  __connectDB(function (err, dbo) {
    if (err) {
      console.log(err);
      return;
    }
    dbo.collection(collection).insertOne(option, function (error, data) {
      callback(error, data);
    });
  });
}
//修改数据
exports.update = function (collection, option1, option2, callback) {
  __connectDB(function (err, dbo) {
    if (err) {
      console.log(err);
      return;
    }
    dbo.collection(collection).updateOne(option1, {
      $set: option2
    }, function (error, data) {
      callback(error, data);
    });
  });
}

//增添数据
exports.addTo = function (collection, option1, option2, callback) {
  __connectDB(function (err, dbo) {
    if (err) {
      console.log(err);
      return;
    }
    dbo.collection(collection).updateOne(option1, {
      $addToSet: option2
    }, function (error, data) {
      callback(error, data);
    });
  });
}


//删除数据. 
exports.delete = function (collection, option, callback) {
  __connectDB(function (err, dbo) {
    if (err) {
      console.log(err);
      return;
    }
    dbo.collection(collection).deleteOne(option, function (error, data) {
      callback(error, data);
    });
  });
}
