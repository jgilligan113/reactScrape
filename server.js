//app engine and mongo database is required
var express = require("express");
//var mongojs = require("mongojs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var Note = require("./models/Note.js");
var HwScrapedData = require("./models/HwScrapedData.js");
var routes = require("./routes-exp/apiRoutes");

mongoose.Promise = Promise;
//require what makes scraping possible!
var request = require("request");
var cheerio = require("cheerio");

//initialize app
var app = express();
var PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));
app.use("/", routes);


//Database config
var databaseUrl = "hwScraper";
var collections = ["hwScrapedData"];

mongoose.connect("mongodb://heroku_rg9xlq09:brq0mrvpeeo4i0unnc56urs2ef@ds163721.mlab.com:63721/heroku_rg9xlq09");
var db = mongoose.connection;

//hook mongojs config to db var --> replaced with Mongoose connection
//var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database error message: " + error);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});


app.listen(PORT, function() {
    console.log("app listening on PORT", PORT);
});

