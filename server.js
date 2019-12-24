var express = require("express");
var path = require("path");

var app = express();

var path = require("path");
var PORT = process.env.PORT||9000;


app.use(express.urlencoded({extended:true}));

app.use(express.json());


app.listen(PORT,()=> {


console.log("we connected" + PORT);
});

require(`./app/routing/apiRoutes.js`)(app);
require(`./app/routing/htmlRoutes.js`)(app);