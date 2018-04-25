var off // Your code here
function diceRandom(num) {
    return Math.floor(Math.random() * Math.floor(num));
}

var diceRoll = diceRandom();r

console.log(diceRandom(6));

var diceSquareOne = document.getElementById('one')
var diceSquareTwo = document.getElementById('two')
var diceSquareThree = document.getElementById('three')
var diceSquareFour = document.getElementById('four')
var diceSquareFive = document.getElementById('five')
var diceSquareSix = document.getElementById('six')
var diceSquareSeven = document.getElementById('seven')
var diceSquareEight = document.getElementById('eight')
var diceSquareNine = document.getElementById('nine')

var offOne = diceDisplaySquareOne.style.display = "none";
var offTwo = diceSquareTwo.style.display = "none";
var offThree = diceSquareThree.style.display = "none";
var offFour = diceSquareFour.style.display = "none";
var offFive = diceSquareFive.style.display = "none";
var offSix = diceSquareSix.style.display = "none";
var offSeven = diceSquareSeven.style.display = "none";
var offEight = diceSquareEight.style.display = "none";
var offNine = diceSquareNine.style.display = "none";


var dice = new function (d1, d2, d3, d4, d5, d6, d7, d8, d9) {
  this.one = if (diceRoll == 1) {
    d1;
    d2;
    d3;
    d4;
    d6;
    d7;
    d8;
    d9;
  }
}
