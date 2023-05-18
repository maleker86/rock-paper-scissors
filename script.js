//new new script.js

//icky global variables bc baby's first program
let roundCount = 0;
let computerCount = 0;
let playerCount = 0;

let playerChoice;
let computerChoice;

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
        console.log(`Player wrote ${playerChoice}`);
        playerChoice = null;
    } else {
        console.log("Please make a choice");
    }
};

function playRound() {
    if (playerChoice) {
        console.log(`Player wrote ${playerChoice}`);
        getComputerChoice();
    playerChoice = null;
    } else {
        console.log("Please make a selection");
    }
};

done.addEventListener('click', function (e) {
    playRound();
});