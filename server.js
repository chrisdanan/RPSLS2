/*
 *Names: Sarah Lee
 		Christopher Dancarlo Danan
 *Created: March 20, 2015
 *Modified: March 20, 2015
 *Purpose: This holds the server side javascript for Rock, Paper, Scissors, Lizard, Spock.
 *References:
*/

// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

"use strict";

var express = require("express"),
	bodyParser = require("body-parser"),
	http = require("http"),
	app = express(),
	wins = 0,
	losses = 0,
	ties = 0;

app.use(express.static(__dirname + "/Client"));
app.use(bodyParser());

http.createServer(app).listen(3000);
console.log("Server listening on port 3000");

app.get("/test", function(req, res){
	res.send("You routed to the test page, here's a cookie");
});

app.post("/play/rock", function(req, res){
	console.log("Server received post");
	console.log(req.body);

	res.end();
});

app.post("/play/paper", function(req, res){
	console.log("Server received post");
	console.log(req.body);

	res.end();
});

app.post("/play/scissors", function(req, res){
	console.log("Server received post");
	console.log(req.body);

	res.end();
});

app.post("/play/lizard", function(req, res){
	console.log("Server received post");
	console.log(req.body);

	res.end();
});

app.post("/play/spock", function(req, res){
	console.log("Server received post");
	console.log(req.body);

	res.end();
});
