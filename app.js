const express = require("express");
const router = require("./router");
const session = require("express-session");
const redis = require('redis').createClient();
const redisStore = require("connect-redis")(session);
const engine = require("ejs-mate");
const app = express();
const port = 10002;

//view engine setup
// use ejs-locals for all ejs templates:
app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); // render('index')

// server static files
app.use("/assets", express.static(__dirname + "/assets"));

// parser
app.use(express.json());
var urlencodedParser = express.urlencoded({
  extended: false
});

// config session
app.use(
  session({
    secret: "Plakeco_Admin",
    // create new redis store.
    store: new redisStore({
      host: "127.0.0.1",
      port: 6379,
      client: redis
    }),
    saveUninitialized: false,
    resave: false,
    // Force the session identifier cookie to be set on every response.
    cookie: {
      maxAge: 1000 * 60 * 30
    },
    rolling: true
  })
);

//set locals to client side
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});


app.use("/", router);

//handle error to be continued

var server = app.listen(port, "127.0.0.1", function () {
  console.log(`App listening on ${port}`);
});
