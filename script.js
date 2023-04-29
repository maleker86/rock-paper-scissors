//script.js

//must include getComputerChoice function to randomly return rps

let computerCount = 0;
let playerCount = 0;

const choices = [
"rock",
"paper",
"scissors"
];

function getComputerChoice() {
const random = Math.floor(Math.random() * choices.length);
let computerChoice = (random, choices[random]);
console.log(`Computer wrote ${computerChoice}`);
return computerChoice;

}

//make sure the playerSelection is CASE-INSENSITIVE so it can be like rock Rock or ROCK
function getPlayerChoice() {
let playerChoice = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
console.log(`Player wrote ${playerChoice}`);

switch (playerChoice) { case "rock":

// console.log("rock");
break;
case "paper":
// console.log("paper");
break;
case "scissors":
// console.log("scissors");
break;
default:
console.log("please type rock paper or scissors");
}return playerChoice;

}

//write a func that plays 1 game of rps. takes playerSelection & computerSelection and return a string that declares the winner like "You Lose! Paper beats Rock".
function playRound(computerChoice,playerChoice) {
    
    switch (true) { case (computerChoice === playerChoice) : console.log("It's a tie"); break; case (computerChoice === "paper" && playerChoice === "rock") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "scissors" && playerChoice === "paper") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "rock" && playerChoice === "scissors") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (playerChoice === "paper" && computerChoice === "rock") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "scissors" && computerChoice === "paper") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "rock" && computerChoice === "scissors") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; default: console.log("The game broke. Please try again."); }

// console.log(The winner is ${winner}.);
// console.log(Computer has won ${computerCount} and player has won ${playerCount});
}

//NEW func called Game
function Game() {

//prev funcs to play 5 round game that has a winner or loser!!!
for (i = 0; i <= 4; i++) {
playRound(getComputerChoice(),getPlayerChoice());
}console.log(`Computer has won ${computerCount} and player has won ${playerCount}`);

//can also make some Helper Funcs :)
if (playerCount > computerCount) {
console.log("Overall, Player wins");
} else if (playerCount < computerCount) {
console.log("Overall, Comp wins");
} else {
console.log("Overall, It's a Tie");
}

// console.log(winner);

// if winner === "Computer" {
// winnerCount.comp = ++1;
// } else if winner === "Player" {
// winnerCount.player = ++1;
// } else {
// }

// console.log(The winner is ${winner}.);
// console.log(The win count is ${winnerCount}.);

// playRound(getComputerChoice(),getPlayerChoice());

// console.log();
}

Game();

//note to self: make the Rounds List ..What Round you are On! Out of 5!!