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
	//choices = ["rock", "paper", "scissors", "lizard", "spock"],
	player = "",		//Holds the player's choice.
	computer = "",		//Holds the computer's choice.
	wins = 0,			//Keep track of the number of wins.
	losses = 0,			//Keep track of the number of losses.
	ties = 0;			//Keep track of the number of ties.

//All static files are located in the Client directory.
app.use(express.static(__dirname + "/Client"));
app.use(bodyParser());

http.createServer(app).listen(3000);
console.log("Server listening on port 3000");

//Get the server choice.
function compMakeMove() {
    var randomNum = Math.floor(Math.random() * 5);
	var computerPlays = "";

    if(randomNum === 0){
        computerPlays = "rock";
    } else if(randomNum === 1){
        computerPlays = "paper";
    } else if(randomNum === 2){
        computerPlays = "scissors";
    } else if(randomNum === 3){
        computerPlays = "lizard";
    } else if(randomNum === 4){
        computerPlays = "spock";
    }
	return computerPlays;
}

//Determine the outcome of the round.
function playing(player, computer){
    if(player === computer){
    	console.log("TIE");
    } else if(player === "rock"){
   		if(computer === "scissors" || computer === "lizard") {
    		console.log("WIN");
    	}
    	else if(computer === "paper" || computer === "spock"){
    		console.log("LOSE");
    	}
    } else if(player === "paper") {
    	if(computer === "rock" || computer === "spock") {
    		console.log("WIN");
    	}
    	else if(computer === "scissors" || computer === "lizard"){
    		console.log("LOSE");
    	}
    } else if(player === "scissors") {
    	if(computer === "paper" || computer === "lizard") {
    		console.log("WIN");
    	}
    	else if(computer === "rock" || computer === "spock"){
    		console.log("LOSE");
    	}
    } else if(player === "lizard") {
    	if(computer === "paper" || computer === "spock") {
    		console.log("WIN");
    	}
    	else if(computer === "rock" || computer === "scissors"){
    		console.log("LOSE");
		}
    } else if(player === "spock") {
    	if(computer === "rock" || computer === "scissors") {
    		console.log("WIN");
    	}
    	else if(computer === "paper" || computer === "lizard"){
    		console.log("LOSE");
    	}
    }
}

app.get("/test", function(req, res){
	res.send("You routed to the test page; here's a cookie");
});

app.post("/play/rock", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer =	 compMakeMove();

	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	playing(player, computer);
	
	res.end();
});

app.post("/play/paper", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	playing(player, computer);

	res.end();
});

app.post("/play/scissors", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	playing(player, computer);

	res.end();
});

app.post("/play/lizard", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	playing(player, computer);

	res.end();
});

app.post("/play/spock", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	playing(player, computer);

	res.end();
});
