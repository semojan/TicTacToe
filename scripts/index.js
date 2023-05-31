const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameOver = false;

const players = [
    {
        "name" : "",
        "symbol" : "X"
    },
    {
        "name" : "",
        "symbol" : "O"
    },
];

const overlyModalE = document.querySelector(".modal");
const overlyBackdropE = document.getElementById("backdrop")
const formE = document.querySelector("form")
const configErrorE = document.getElementById("configErrors")
const gameE = document.getElementById("theGame");
const activePlayerNameE = document.getElementById("activePlayer");
const gameResultE = document.getElementById("gameResult");
const winnerE = document.getElementById("winner");

const editPlayer1E = document.getElementById("editPlayer1");
const editPlayer2E = document.getElementById("editPlayer2");
const cancelConfigE = document.getElementById("cancelConfig");
const newGameE = document.getElementById("newGame");
const gameFieldEs = document.querySelectorAll("#gameBoard li")
// const gameBoardE = document.getElementById("gameBoard");

editPlayer1E.addEventListener("click" ,openPlayerConfig);
editPlayer2E.addEventListener("click" ,openPlayerConfig);
cancelConfigE.addEventListener("click" ,closeConfig);
overlyBackdropE.addEventListener("click" ,closeConfig);
newGameE.addEventListener("click", startNewGame);

formE.addEventListener("submit" , saveConfig);

for (const GFE of gameFieldEs){
    GFE.addEventListener("click" , selectField);
}
// gameBoardE.addEventListener("click", selectField)