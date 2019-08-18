// Require in dependencies for server
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var handlebars = require("express-handlebars");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/webScraper";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Require routes with Express
require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on http://localhost:" + PORT);
});

module.exports = app;
//module.exports = db;