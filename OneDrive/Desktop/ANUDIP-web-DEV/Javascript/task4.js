
let gameNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = null;

while (userGuess !== gameNumber) {
    userGuess = parseInt(prompt("Guess the number between 1 and 10:"));

    if (userGuess > gameNumber) {
        alert("Too high! Try again.");
    } 
    else if (userGuess < gameNumber) {
        alert("Too low! Try again.");
    } 
    else if (userGuess === gameNumber) {
        alert(" Correct! You guessed the right number.");
    } 
    else {
        alert("Please enter a valid number.");
    }
}
