var express = require("express");
var app =  express();

app.get("/", function (req, res) {
<<<<<<< HEAD
    res.send("Hello Worlds");
=======
    res.send("Hello World");
>>>>>>> b8142091801b1681addd56108d4350e13b155c9d
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});