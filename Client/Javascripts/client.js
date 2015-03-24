/*
 *Names: Sarah Lee
 		Christopher Dancarlo Danan
 *Created: March 20, 2015
 *Modified: March 21, 2015
 *Purpose: This holds the client side javascript for Rock, Paper, Scissors, Lizard, Spock.
 *References:
*/

// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function(){
	"use strict";

	//Initialize the results portion of the page.
	function initializeResults(){
		$(".results").append($("<p>").addClass("outcome"));
		$(".results").append($("<p>").addClass("player"));
		$(".results").append($("<p>").addClass("computer"));
		//$(".results").append($("<p>").addClass("outcome"));
		$(".results").append($("<p>").addClass("wins"));
		$(".results").append($("<p>").addClass("losses"));
		$(".results").append($("<p>").addClass("ties"));
	}

	//Update the results portion of the page after each round of the game.
	function updateResults(results){
		$(".outcome").text(results.outcome);
		$(".player").text("Player chose: " + results.playerChoice);
		$(".computer").text("Computer chose: " + results.computerChoice);
		//$(".outcome").text("Outcome of round: " + results.outcome);
		$(".wins").text("Number of wins: " + results.wins);
		$(".losses").text("Number of losses: " + results.losses);
		$(".ties").text("Number of ties: " + results.ties);
	}

	//console.log("Hello Vane!");

	//Create variable names for the five buttons.
	var $rock = $("<button>").text("Rock").addClass("rockBtn rpslsChoice"),
		$paper = $("<button>").text("Paper").addClass("paperBtn rpslsChoice"),
		$scissors = $("<button>").text("Scissors").addClass("scissorsBtn rpslsChoice"),
		$lizard = $("<button>").text("Lizard").addClass("lizardBtn rpslsChoice"),
		$spock = $("<button>").text("Spock").addClass("spockBtn rpslsChoice");

	//Append the five buttons to the html page.
	$(".playerChoice").append($rock);
	$(".playerChoice").append($paper);
	$(".playerChoice").append($scissors);
	$(".playerChoice").append($lizard);
	$(".playerChoice").append($spock);

	initializeResults();

	//Create button handlers for the five buttons.
	$rock.on("click", function(){
		console.log("rock button clicked");

		//Post to the server the player's choice.
		$.post("/play/rock", {"playerChoice" : "rock"}, function(res){
			console.log("Successfully posted rock to the server");

			console.log(res);

			updateResults(res);
		});
	});

	$paper.on("click", function(){
		console.log("paper button clicked");

		$.post("/play/paper", {"playerChoice" : "paper"}, function(res){
			console.log("Successfully posted paper to the server");

			console.log(res);

			updateResults(res);
		});
	});

	$scissors.on("click", function(){
		console.log("scissors button clicked");

		$.post("/play/scissors", {"playerChoice" : "scissors"}, function(res){
			console.log("Successfully posted scissors to the server");

			console.log(res);

			updateResults(res);
		});
	});

	$lizard.on("click", function(){
		console.log("lizard button clicked");

		$.post("/play/lizard", {"playerChoice": "lizard"}, function(res){
			console.log("Successfully posted lizard to the server");

			console.log(res);

			updateResults(res);
		});
	});

	$spock.on("click", function(){
		console.log("spock button clicked");

		$.post("play/spock", {"playerChoice" : "spock"}, function(res){
			console.log("Successfully posted spock to the server");

			console.log(res);

			updateResults(res);
		});
	});

};

$(document).ready(main);