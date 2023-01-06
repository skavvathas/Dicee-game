function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var dicePlayer1 = randomIntFromInterval(1, 6);
var dicePlayer2 = randomIntFromInterval(1, 6);


if (dicePlayer1 > dicePlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !!!";
} else if (dicePlayer2 > dicePlayer1) {
    document.querySelector("h1").innerHTML = "Player 2 wins !!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

if (dicePlayer1 === 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
} else if (dicePlayer1 === 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
} else if (dicePlayer1 === 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
} else if (dicePlayer1 === 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
} else if (dicePlayer1 === 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
} else if (dicePlayer1 === 6) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}

if (dicePlayer2 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
} else if (dicePlayer2 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
} else if (dicePlayer2 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
} else if (dicePlayer2 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
} else if (dicePlayer2 === 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
} else if (dicePlayer2 === 6) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}