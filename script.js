//script.js

//must include getComputerChoice function to randomly return rps

let roundCount = 0;
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

switch (playerChoice) { 
    case "rock":

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
function playRound(computerChoice,playerChoice) {switch (true) { case (computerChoice === playerChoice) : console.log("It's a tie"); break; case (computerChoice === "paper" && playerChoice === "rock") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "scissors" && playerChoice === "paper") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "rock" && playerChoice === "scissors") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (playerChoice === "paper" && computerChoice === "rock") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "scissors" && computerChoice === "paper") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "rock" && computerChoice === "scissors") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; default: console.log("The game broke. Please try again."); }

// console.log(The winner is ${winner}.);
// console.log(Computer has won ${computerCount} and player has won ${playerCount});
}

//NEW func called Game
function Game() {for (i = 0; i <= 4; i++) { roundCount = ++roundCount; console.log(`It is Round ${roundCount} of 5.`); playRound(getComputerChoice(),getPlayerChoice());

}console.log(`Computer has won ${computerCount} and player has won ${playerCount}`); if (playerCount > computerCount) { console.log("Overall, Player wins"); } else if (playerCount < computerCount) { console.log("Overall, Comp wins"); } else { console.log("Overall, It's a Tie"); }

}

Game(); 