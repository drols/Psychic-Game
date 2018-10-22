// This is an array holds the alphabet the computer will choose from.

var computerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// These variables will show the user the number of wins and losses they have from their current play session.

var wins = 0;
var losses = 0;
var recentGuesses = 0;
var guessesLeft = 15;

// These variables are getting the element id's from the HTML itself and determining where on the HTML text will appear in response to the user actions.

var titleDirectionsText = document.getElementById("title-directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var userGuessText = document.getElementById("user-guess");

//

document.onkeyup = function(event) {
    
    
    var userGuess = event.key;

    var computerLetter = computerAlphabet[Math.floor(Math.random()* computerAlphabet.length)];

    if (userGuess == computerLetter) {
        wins++;
        console.log("User guessed the correct letter.")
    }

    else if(userGuess != computerLetter && guessesLeft != "0") { 
        guessesLeft--;
        console.log("User chose the incorrect letter and has" + guessesLeft + "left")
    }

    else {
        console.log("You Lose! The correct letter was:" + computerLetter + "!")
    }
}

