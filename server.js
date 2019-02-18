
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  



