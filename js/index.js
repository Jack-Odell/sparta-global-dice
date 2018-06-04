// Your code here
function diceRandom(num) {
    var theRoll = Math.floor(Math.random() * (num) + 1);
    if (theRoll > 0) {return theRoll;}

}

var diceRoll = diceRandom(6);

console.log(diceRoll);

var diceSquareOne = document.getElementById('one');
var diceSquareTwo = document.getElementById('two');
var diceSquareThree = document.getElementById('three');
var diceSquareFour = document.getElementById('four');
var diceSquareFive = document.getElementById('five');
var diceSquareSix = document.getElementById('six');
var diceSquareSeven = document.getElementById('seven');
var diceSquareEight = document.getElementById('eight');
var diceSquareNine = document.getElementById('nine');

var turnOffDot = new function () {
  this.One = function () {diceSquareOne.style.display = "none";}
  this.Two = function () {diceSquareTwo.style.display = "none";}
  this.Three = function () {diceSquareThree.style.display = "none";}
  this.Four = function () {diceSquareFour.style.display = "none";}
  this.Five = function () {diceSquareFive.style.display = "none";}
  this.Six = function () {diceSquareSix.style.display = "none";}
  this.Seven = function () {diceSquareSeven.style.display = "none";}
  this.Eight = function () {diceSquareEight.style.display = "none";}
  this.Nine = function () {diceSquareNine.style.display = "none";}
}

var reloadPage = function () {
  location.reload();
}

function showOne () {
  turnOffDot.One();
  turnOffDot.Two();
  turnOffDot.Three();
  turnOffDot.Four();
  turnOffDot.Six();
  turnOffDot.Seven();
  turnOffDot.Eight();
  turnOffDot.Nine();
}

function showTwo () {
  turnOffDot.One();
  turnOffDot.Two();
  turnOffDot.Three();
  turnOffDot.Five();
  turnOffDot.Seven();
  turnOffDot.Eight();
  turnOffDot.Nine();
}

function showThree() {
  turnOffDot.Two();
  turnOffDot.Three();
  turnOffDot.Four();
  turnOffDot.Six();
  turnOffDot.Seven();
  turnOffDot.Eight();
}
function showFour() {
  turnOffDot.Two();
  turnOffDot.Four();
  turnOffDot.Five();
  turnOffDot.Six();
  turnOffDot.Eight();
}
function showFive() {
  turnOffDot.Two();
  turnOffDot.Four();
  turnOffDot.Six();
  turnOffDot.Eight();
}
function showSix() {
  turnOffDot.Two();
  turnOffDot.Five();
  turnOffDot.Eight();
}



if (diceRoll === 1) {
  showOne();
}
else if (diceRoll === 2) {
  showTwo();
}
else if (diceRoll === 3) {
  showThree();
}
else if (diceRoll === 4) {
  showFour();
}
else if (diceRoll === 5) {
  showFive();
}
else if (diceRoll === 6) {
  showSix();
}
