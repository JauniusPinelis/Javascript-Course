const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let isGameFinished = false;

function makeMove(position) {

    if (!isGameFinished){
        
        let isMoveValid = playerMove(position);
        checkTheWinner();
        
        // Wait for 0.5s and then opponent makes a move
        setTimeout(() => {
            if (!isGameFinished && isMoveValid){
                oponentMove();
                checkTheWinner();
            }
        }, 500);
    }
}

function resetGame(){
    // we need to modify isGameFinished to true
    isGameFinished = false;

    // Reset the innerText for all the cells
   
    // Convert received HtmlCollection into array
    cells = GetCellsArray();

    cells.forEach(cell => {
        cell.innerText = "";
    });

    // Empty text for game status element
    updateGameStatus("");
}

function checkTheWinner() {
   
    // Convert received HtmlCollection into array
    cells = GetCellsArray();

    winningCombinations.forEach(winningCombination => {
        let cellValue1 = cells[winningCombination[0]].innerText;
        let cellValue2 = cells[winningCombination[1]].innerText;
        let cellValue3 = cells[winningCombination[2]].innerText;

        if (cellValue1 == cellValue2 &&
            cellValue2 == cellValue3 && 
            cellValue1 != "") {

            let winnerValue = cellValue1; //Either X or O
            let winningText = "";
            if (winnerValue == 'O') {
                winningText = "Player has won!"
            }
            else {
                winningText = "An opponent has won!"
            }

            updateGameStatus(winningText);

            isGameFinished = true;
        }
    });

    if (cells.filter(c => c.innerText == "").length == 0) {
        //modifying the element to display " the end"
        updateGameStatus("Draw!");
        isGameFinished = true;
    }
}

function updateGameStatus(message){
    let gameStatusElement = document.getElementsByClassName("game--status")[0];
    gameStatusElement.innerText = message;
}

function GetCellsArray(){
    let cells = document.getElementsByClassName("cell");
    // Convert received HtmlCollection into array
    return Array.from(cells)
}

function playerMove(position) {
    console.log(`position ${position} has been marked`);
    // Get The div element i clicked
    let elementId = `cell-${position}`;
    let element = document.getElementById(elementId);

    // Check if the move is valid
    if (element.innerText == ""){
        //update the div to O
        element.innerText = 'O';
        return true;
    }
    else {
        return false;
    }
    
}

function oponentMove() {
    // I have to get all the cell elements

    // Convert received HtmlCollection into array
    cells = GetCellsArray();

    // and then i have to filter cells that are available
    cells = cells.filter(c => c.innerText == "");

    // and randomly pick one of those available values
    let randomNumber = getRandomInt(0, cells.length - 1);

    // and mark it as X
    cells[randomNumber].innerText = 'X';
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

