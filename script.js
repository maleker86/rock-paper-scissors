//new new script.js

//icky global variables bc baby's first program
let roundCount = 0;
let computerCount = 0;
let playerCount = 0;

let playerChoice = null;
let computerChoice = null;

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

// PLAYER CHOICE NEW SECTION START

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const done = document.querySelector(".done");

rock.addEventListener('click', function (e) {
    let result = e.target.textContent.toLowerCase();
    playerChoice = result;
// console.log(playerChoice);
});

paper.addEventListener('click', function (e) {
    let result = e.target.textContent.toLowerCase();
    playerChoice = result;
// console.log(playerChoice);
});

scissors.addEventListener('click', function (e) {
    let result = e.target.textContent.toLowerCase();
    playerChoice = result;
// console.log(playerChoice);
});

function getPlayerChoice() {
    if (playerChoice) {
        // console.log("P Result got");
        console.log(`Player wrote ${playerChoice}`);
        return playerChoice;
    } else {
        console.log("Please make a selection");
    }
};

function playRound(playerChoice,computerChoice) {
    switch (true) { 
        case (playerChoice === computerChoice) : 
        console.log("tie"); break; 
        case (playerChoice === "paper" && computerChoice === "rock") : 
        console.log("player win"); break; 
        case (playerChoice === "paper" && computerChoice === "scissors") : 
        console.log("player lose"); break; 
        case (playerChoice === "scissors" && computerChoice === "rock") : 
        console.log("player lose"); break; 
        case (playerChoice === "scissors" && computerChoice === "paper") : 
        console.log("player lose"); break; 
        case (playerChoice === "rock" && computerChoice === "paper") : 
        console.log("player lose"); break; 
        case (playerChoice === "rock" && computerChoice === "scissors") : 
        console.log("player win"); break; 
        default: console.log("woah"); break; 
    } 
        playerChoice = null;
}

done.addEventListener('click', function (e) {
    playRound(getPlayerChoice(),getComputerChoice());
});