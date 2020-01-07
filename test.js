// var mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/try", function(err) {
// if(err){
//     console.log('连接失败');
// }else{
//         console.log('连接成功');
//         var schema = new mongoose.Schema({
//             username:"string",
//             password:"number"
//         });
//         var Model = mongoose.model('Model', schema);
//         var doc1 = new Model({ 
//             username:"admin",
//             password:123456
//         });
//         doc1.save();  //这一步骤是必须的！save函数中可以使用cb
//     }
// });

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     var kittySchema = new mongoose.Schema({
//         name: String
//     });

//     kittySchema.methods.speak = function () {
//         var greeting = this.name
//           ? "Meow name is " + this.name
//           : "I don't have a name";
//         console.log(greeting);
//       }
    
//     var Kitten = mongoose.model('Kitten', kittySchema);
//     var silence = new Kitten({ name: 'Silence' }); 
//     console.log(silence.name); // 'Silence'
//     silence.save();
//     var fluffy = new Kitten({ name: 'fluffy' });
//     fluffy.save(function (err, fluffy) {
//         if (err) return console.error(err);
//         fluffy.speak();
//         Kitten.find(function (err, kittens) {
//             if (err) return console.error(err);
//             console.log(kittens);
//         })
//         Kitten.find({ name: /^fluff/ }, ()=>{console.log('hello world')});
//     });
// });


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// mongoose.Promise = global.Promise;

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productmanage', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var userSchema = new mongoose.Schema({
        username: String,
        password: String
    });
    var User = mongoose.model('user', userSchema);
    var root = new User({username: 'root',password: 'admin' }); 
    root.save();
    // db.close();
});
