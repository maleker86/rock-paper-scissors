//script.js

//NOTE TO SELF: THE COMPUTER CHOICE NEEDS TO NOT BE PRINTED…BEFORE THE PLAYER CHOOSES A THING :)

//icky global variables bc baby's first program
let roundCount = 0;
let computerCount = 0;
let playerCount = 0;

//get & set computerSelection
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

//get & set case-insensitive playerSelection
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

//round func compares player & computer choices
function playRound(playerChoice,computerChoice) {switch (true) { case (computerChoice === playerChoice) : console.log("It's a tie"); break; case (computerChoice === "paper" && playerChoice === "rock") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "scissors" && playerChoice === "paper") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (computerChoice === "rock" && playerChoice === "scissors") : console.log(`You lose! ${computerChoice} beats ${playerChoice}.`); computerCount = ++computerCount; break; case (playerChoice === "paper" && computerChoice === "rock") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "scissors" && computerChoice === "paper") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; case (playerChoice === "rock" && computerChoice === "scissors") : console.log(`You win! ${playerChoice} beats ${computerChoice}.`); playerCount = ++playerCount; break; default: console.log("The game broke. Please try again."); }

}

//calls new Game
function Game() {

//new round
for (i = 0; i <= 4; i++) {
roundCount = ++roundCount;
console.log(`It is Round ${roundCount} of 5.`);
playRound(getPlayerChoice(),getComputerChoice());
}

//print round winner count
console.log(`Computer has won ${computerCount} and player has won ${playerCount}`);

//determine overall winner
if (playerCount > computerCount) {
console.log("Overall, Player wins");
} else if (playerCount < computerCount) {
console.log("Overall, Comp wins");
} else {
console.log("Overall, It's a Tie");
}
}

Game();