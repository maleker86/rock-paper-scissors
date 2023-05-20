//new new script.js

//icky global variables bc baby's first program
let roundCount = 0;
let computerCount = 0;
let playerCount = 0;

const results = document.getElementById("results");
const topbar = document.getElementById("topbar");
const outcome = document.getElementById("outcome");
const gameOver = document.getElementById("gameOver");

let playerSpace = document.createElement("p");
let computerSpace = document.createElement("p");
let errorMessage = document.createElement("p");
let roundWinner = document.createElement("p");
let roundCounter = document.createElement("p");
let outcomeNote = document.createElement("p");
let gameOverNote = document.createElement("p");

let playerChoice;
let computerChoice;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const done = document.querySelector(".done");

//set & get computerSelection
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  let computerChoice = (random, choices[random]);
  if (playerChoice !== "None") {
    console.log(`Computer wrote ${computerChoice}`);
    // results.append(computerSpace);
    computerSpace.textContent = `Computer wrote ${computerChoice}`;
    return computerChoice;
  } else {
    computerChoice = "No Survivors";
  }
}

// PLAYER CHOICE NEW SECTION START

rock.addEventListener("mousedown", function (e) {
  let result = e.target.textContent.toLowerCase();
  playerChoice = result;
});

paper.addEventListener("click", function (e) {
  let result = e.target.textContent.toLowerCase();
  playerChoice = result;
});

scissors.addEventListener("click", function (e) {
  let result = e.target.textContent.toLowerCase();
  playerChoice = result;
});

function getPlayerChoice() {
  if (playerChoice) {
    console.log(`Player wrote ${playerChoice}`);
    // results.append(playerSpace);
    playerSpace.textContent = `Player wrote ${playerChoice}`;
    return playerChoice;
  } else {
    console.log("Please make a selection");
    playerChoice = "None";
  }
}

function getWinner(playerChoice, computerChoice) {
  
    if (computerChoice && playerChoice) {
      results.append(computerSpace);
      results.append(playerSpace);
      roundCount++;
    } else {
      errorMessage.textContent = "Please make a selection.";
      results.append(errorMessage);
    }

  switch (true) {
    case playerChoice && computerChoice && playerChoice === computerChoice:
      console.log("tie");
      outcomeNote.textContent = "It's a tie";
      break;
    case playerChoice === "paper" && computerChoice === "rock":
      console.log("player win");
      outcomeNote.textContent = "player win";
      playerCount += 1;
      break;
    case playerChoice === "paper" && computerChoice === "scissors":
      console.log("player lose");
      outcomeNote.textContent = "player lose";
      computerCount += 1;
      break;
    case playerChoice === "scissors" && computerChoice === "rock":
      console.log("player lose");
      outcomeNote.textContent = "player lose";
      computerCount += 1;
      break;
    case playerChoice === "scissors" && computerChoice === "paper":
      console.log("player win");
      outcomeNote.textContent = "player win";
      playerCount += 1;
      break;
    case playerChoice === "rock" && computerChoice === "paper":
      console.log("player lose");
      outcomeNote.textContent = "player lose";
      computerCount += 1;
      break;
    case playerChoice === "rock" && computerChoice === "scissors":
      console.log("player win");
      outcomeNote.textContent = "player win";
      playerCount += 1;
      break;
    default:
      outcomeNote.textContent = "No winner determined";
      break;
  }

  // console.log(Computer wins is ${computerCount});
  // console.log(Player wins is ${playerCount});
}

done.addEventListener("click", function (e) {
    results.textContent = "";
    getWinner(getPlayerChoice(), getComputerChoice());
    Game();
    playerChoice = null;
    computerChoice = null;
  });
  
  function Game() {

      results.append(roundWinner);

      // console.log(It is Round ${roundCount});
      if (roundCount < 5) {
        roundCounter.textContent = `It is Round ${roundCount} of 5`;
        roundWinner.textContent = `Computer: ${computerCount} & Player ${playerCount}`;
        topbar.append(roundCounter, roundWinner);
        outcome.append(outcomeNote);
      } else {
        done.disabled = true;

        roundCounter.textContent = `It is Round ${roundCount} of 5`;
        roundWinner.textContent = `Computer: ${computerCount} & Player ${playerCount}`;
        topbar.append(roundCounter, roundWinner);
        if (playerCount < computerCount) {
          outcomeNote.textContent = "player loses!";
          outcome.append(outcomeNote);
        } else {
          outcomeNote.textContent = "player wins!";
          outcome.append(outcomeNote);
        }
        gameOverNote.textContent = "It's all over folks!";
        gameOver.appendChild(gameOverNote);
      }
    }
