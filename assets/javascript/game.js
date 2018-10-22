// This is an array holds the alphabet the computer will choose from.

var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

document.onkeydown = function(event) {
    
    var userGuess = event.key;
    var validGuess;

    var computerLetter = availableLetters[Math.floor(Math.random()* availableLetters.length)];

    for (i = 0; i < availableLetters.length; i++) {
        if (userGuess == availableLetters[i]) {
            validGuess = true;
            console.log("You typed a key.")
        }

        else if (userGuess !== availableLetters[i]){
            validGuess = false;
            alert("Invalid Option. Please type a letter");
            console.log("Yo shit's broken dawg");
            console.log(userGuess);
        }
    }

    if (userGuess === computerLetter && validGuess == true) {
        wins++;
        guessesLeft = 15;
        alert("You win! The correct letter was: " + computerLetter);
        console.log("User guessed the correct letter.");
    }

    else if (userGuess != computerLetter && guessesLeft > "0" && validGuess === true) { 
        guessesLeft--;
        console.log("The letter " + userGuess + " was incorrect. You have " + guessesLeft + " guesses left");
    }

    else {
        guessesLeft = 15;
        alert("You Lose");
        console.log("You Lose! The correct letter was:" + computerLetter + "!");
    }
}  