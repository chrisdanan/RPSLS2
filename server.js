/*
 *Names: Sarah Lee
 		Christopher Dancarlo Danan
 *Created: March 20, 2015
 *Modified: March 21, 2015
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
	outcome = "",		//Holds the outcome of the round for the player.
	wins = 0,			//Keep track of the number of wins.
	losses = 0,			//Keep track of the number of losses.
	ties = 0,			//Keep track of the number of ties.
						//The JSON object that will be returned at the end of each round.
	stats = {"outcome" : outcome,
			 "wins" : wins,
			 "losses" : losses,
			 "ties" : ties};	

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
    	ties++;
    	return "tie";
    } else if(player === "rock"){
   		if(computer === "scissors" || computer === "lizard") {
    		console.log("WIN");
    		wins++;
    		return "win";
    	}
    	else if(computer === "paper" || computer === "spock"){
    		console.log("LOSE");
    		losses++;
    		return "lose";
    	}
    } else if(player === "paper") {
    	if(computer === "rock" || computer === "spock") {
    		console.log("WIN");
    		wins++;
    		return "win";
    	}
    	else if(computer === "scissors" || computer === "lizard"){
    		console.log("LOSE");
    		losses++;
    		return "lose";
    	}
    } else if(player === "scissors") {
    	if(computer === "paper" || computer === "lizard") {
    		console.log("WIN");
    		wins++;
    		return "win";
    	}
    	else if(computer === "rock" || computer === "spock"){
    		console.log("LOSE");
    		losses++;
    		return "lose";
    	}
    } else if(player === "lizard") {
    	if(computer === "paper" || computer === "spock") {
    		console.log("WIN");
    		wins++;
    		return "win";
    	}
    	else if(computer === "rock" || computer === "scissors"){
    		console.log("LOSE");
    		losses++;
    		return "lose";
		}
    } else if(player === "spock") {
    	if(computer === "rock" || computer === "scissors") {
    		console.log("WIN");
    		wins++;
    		return "win";
    	}
    	else if(computer === "paper" || computer === "lizard"){
    		console.log("LOSE");
    		losses++;
    		return "lose";
    	}
    }
}

//Update the JSON object that we will return to the client.
function updateJSON(){
	stats.outcome = outcome;
	stats.wins = wins;
	stats.losses = losses;
	stats.ties = ties;

	//console.log(stats);
}

//Routes to handle each URL.
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

	outcome = playing(player, computer);
	console.log("Outcome: " + outcome);
	console.log("Wins: " + wins + "; Losses: " + losses + "; Ties: " + ties);

	updateJSON();

	res.json(stats);
});

app.post("/play/paper", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	outcome = playing(player, computer);
	console.log("Outcome: " + outcome);
	console.log("Wins: " + wins + "; Losses: " + losses + "; Ties: " + ties);

	updateJSON();

	res.json(stats);
});

app.post("/play/scissors", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	outcome = playing(player, computer);
	console.log("Outcome: " + outcome);
	console.log("Wins: " + wins + "; Losses: " + losses + "; Ties: " + ties);

	updateJSON();

	res.json(stats);
});

app.post("/play/lizard", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	outcome = playing(player, computer);
	console.log("Outcome: " + outcome);
	console.log("Wins: " + wins + "; Losses: " + losses + "; Ties: " + ties);

	updateJSON();

	res.json(stats);
});

app.post("/play/spock", function(req, res){
	console.log("Server received post");
	//console.log("Request body: " + req.body);
	//console.log("Player Choice: " + req.body.playerChoice);

	player = req.body.playerChoice;
	computer = compMakeMove();
	
	console.log("Player choice: " + player);
	console.log("Computer choice: " + computer);

	outcome = playing(player, computer);
	console.log("Outcome: " + outcome);
	console.log("Wins: " + wins + "; Losses: " + losses + "; Ties: " + ties);

	updateJSON();

	res.json(stats);
});

//t
//fflvd
