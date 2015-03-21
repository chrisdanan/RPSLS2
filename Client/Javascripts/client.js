/*
 *Names: Sarah Lee
 		Christopher Dancarlo Danan
 *Created: March 20, 2015
 *Modified: March 20, 2015
 *Purpose: This holds the client side javascript for Rock, Paper, Scissors, Lizard, Spock.
 *References:
*/

// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function(){
	"use strict";

	//console.log("Hello Vane!");

	//Create variable names for the five buttons.
	var $rock = $("<button>").text("Rock").addClass("rockBtn"),
		$paper = $("<button>").text("Paper").addClass("paperBtn"),
		$scissors = $("<button>").text("Scissors").addClass("scissorsBtn"),
		$lizard = $("<button>").text("Lizard").addClass("lizardBtn"),
		$spock = $("<button>").text("Spock").addClass("spockBtn");

	//Append the five buttons to the html page.
	$(".playerChoice").append($rock);
	$(".playerChoice").append($paper);
	$(".playerChoice").append($scissors);
	$(".playerChoice").append($lizard);
	$(".playerChoice").append($spock);

	//Create button handlers for the five buttons.
	$rock.on("click", function(){
		console.log("rock button clicked");
	});

	$paper.on("click", function(){
		console.log("paper button clicked");
	});

	$scissors.on("click", function(){
		console.log("scissors button clicked");
	});

	$lizard.on("click", function(){
		console.log("lizard button clicked");
	});

	$spock.on("click", function(){
		console.log("spock button clicked");
	});

};

$(document).ready(main);