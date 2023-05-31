function resetGame() {
    activePlayer = 0;
    currentRound = 1;

    // gameResultE.firstElementChild.innerHTML = 'You WON <span id="winner"></span>!';  
    gameResultE.style.display = "none";

    // gameBoardIndex = 0;
    for (let i = 0 ; i < 3 ; i++){
        for (let j = 0 ; j < 3 ; j++){
            gameData[i][j] = 0;
            // gameBoardE.children[gameBoardIndex].textContent = "";
            // gameBoardE.children[gameBoardIndex].classList.remove("disabled");
            // gameBoardIndex++;
        }
    }

    for (const GFE of gameFieldEs){
        GFE.textContent = "";
        GFE.classList.remove("disabled");
    }
}

function startNewGame(){
    if(players[0].name === "" || players[1].name === ""){
        alert("please set costume name for each player first!");
        return;
    }

    resetGame();

    activePlayerNameE.textContent = players[activePlayer].name;
    
    gameE.style.display = "block";
}

function checkWinner(){
    //check rows
    for (let i = 0 ; i < 3 ; i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ){
            return gameData[i][0];
        }
    }
    //check columns
    for (let i = 0 ; i < 3 ; i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ){
            return gameData[0][i];
        }
    }
    //diagonal
    if(
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ){
        return gameData[0][0];
    }

    if(
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ){
        return gameData[2][0];
    }

    if(currentRound === 9){
        return -1;
    }

    return 0;
}

function switchP(){
    if (activePlayer === 0){
        activePlayer = 1;
    } else{
        activePlayer = 0;
    }
    activePlayerNameE.textContent = players[activePlayer].name;
}

function selectField(event){
    // if (event.target.tagName !== "LI"){
    //     return;
    // }
    if (gameOver){
        return;
    }

    const selectField = event.target;
    const selectedCol = selectField.dataset.col - 1;
    const selectedRow = selectField.dataset.row - 1;
    if (gameData[selectedRow][selectedCol] > 0){
        alert("please select an empty field");
        return;
    }

    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");

    gameData[selectedRow][selectedCol] = activePlayer + 1;

    const winnerid = checkWinner();

    if (winnerid !== 0){
        endGame(winnerid);
    }

    currentRound++;
    switchP();
}

function endGame(winnerid){
    gameResultE.style.display = "block";
    gameOver = true;

    if (winnerid > 0){
        const winner = players[winnerid - 1].name;
        winnerE.textContent = winner;
    }
    else {
        gameResultE.firstElementChild.textContent = "It's a draw!";  
    }
    
}