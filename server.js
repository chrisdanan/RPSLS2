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
	http = require("http"),
	app = express();

app.use(express.static(__dirname + "/Client"));

http.createServer(app).listen(3000);
console.log("Server listening on port 3000");

app.get("/test", function(req, res){
	res.send("You routed to the test page, here's a cookie");
});