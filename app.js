var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.set("views", "./views");
app.set('view engine', 'pug');

app.use(require("morgan") ("combined"));

/*npm WARN deprecated transformers@1.8.3: Deprecated, use jstransformer
 chatapp@1.0.0 /home/inn4ki/WebstormProjects/chatapp
 └─┬ express-debug@1.1.1 */

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));

require('express-debug')(app, {});

app.use(bodyParser.urlencoded({ extended:   true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render("home", { title: "Home"});
});

var adminRouter = require("./admin");
app.use("/admin", adminRouter);

var apiRouter = require("./api");
app.use("/api", apiRouter);

app.listen(3000, function () {
    console.log('Chat app listening on port 3000!');
});