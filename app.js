var express = require("express");
var app =  express();

app.set("views", "./views");
app.set("view engine", 'pug');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get('/', function (req, res) {
    res.render("index", {title: "Home"});
});

app.get('/admin/rooms', function (req, res){
    res.render("rooms", {title: "Chat Rooms"});
});

app.get('/help', function (req, res) {
    res.render("rooms");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});