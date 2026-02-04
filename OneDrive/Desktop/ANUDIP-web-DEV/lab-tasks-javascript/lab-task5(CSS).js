let turn = "X";
let gameActive = true;
let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

let wins = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];


cells.forEach(cell => {
    cell.onclick = () => {
    
        if (cell.innerText === "" && gameActive) {
            cell.innerText = turn;
            checkWin();
            if (gameActive) { // If no one won yet, switch turn
                turn = turn === "X" ? "O" : "X";
                statusText.innerText = `Player ${turn}'s Turn`;
            }
        }
    };
});

function checkWin() {
    wins.forEach(combo => {

        let [a, b, c] = combo;
        let v1 = cells[a].innerText;
        let v2 = cells[b].innerText;
        let v3 = cells[c].innerText;

        if (v1 !== "" && v1 === v2 && v2 === v3) {
            statusText.innerText = `Player ${turn} Wins!`;
            gameActive = false;
        }
    });

    if (gameActive && [...cells].every(cell => cell.innerText !== "")) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame() {
    cells.forEach(cell => cell.innerText = "");
    turn = "X";
    gameActive = true;
    statusText.innerText = "Player X's Turn";
}