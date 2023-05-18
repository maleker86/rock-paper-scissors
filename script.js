//script.js

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let playerChoice = "";

//let playerChoice = document.getElementsByClassName("choice");

//playerChoice.addEventListener('click', function (e) {
// console.log(e.target.textContent.toLowerCase());
//});

rock.addEventListener('click', function (e) {
// console.log(e.target.textContent.toLowerCase());
let result = e.target.textContent.toLowerCase();
// return result;
playerChoice = result;
console.log(playerChoice);
// getInput();

});

paper.addEventListener('click', function (e) {
// console.log(e.target.textContent.toLowerCase());
let result = e.target.textContent.toLowerCase();
// return result;
playerChoice = result;
console.log(playerChoice);
// getInput();

});

scissors.addEventListener('click', function (e) {
// console.log(e.target.textContent.toLowerCase());
let result = e.target.textContent.toLowerCase();
// return result;
playerChoice = result;
console.log(playerChoice);
// getInput();

});

//function getInput() {
// let result = e.target.textContent.toLowerCase();
// return result;
//}