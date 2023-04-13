// Variables
function Player(name, marker, turn) {
    this.name = name;
    this.marker = marker;
    this.turn = turn;
    return {name, marker, turn};
}

// Setting up the players
const player1 = new Player('Bryan', 'X', false);
const player2 = new Player('Grace', 'O', false);
const xButton = document.querySelector('.X');
const oButton = document.querySelector('.O');
let gameboard = ['', '', '', '', '', '', '', '', ''];

// console.log(player1, player2);
console.log(gameboard);

// Game logic
// player wins when they get one of the following --
// 3 across - horizontally, 3 across vertically, 3 across diagnolly
// a tie occurs when none of those conditions are met.

function generateGameBoard() {
    const gameboardDiv = document.querySelector('.gameboard');
    gameboard.forEach((tile) => {
        const div = document.createElement('div');
        div.classList.add('gameboard-tile');
        gameboardDiv.appendChild(div);
    })
}

generateGameBoard();

function gameLogic(p1, p2) {
    if (p1.turn == true && p2.turn == false) {
        p2.turn = true;
        placeMarker(player1);
    } 
    if (p1.turn == false && p2.turn == true) {
        p1.turn = true;
        placeMarker(player2);
    }
}

function placeMarker(player) {
    const p = document.createElement('p');
    p.textContent = player.marker;
    return p;
}

window.addEventListener('click', (e) => {
    if (e.target.classList == 'gameboard-tile' && player1.turn == true && player2.turn == false) {
        gameLogic(player1, player2);
        e.target.appendChild(placeMarker(player1));
        player1.turn = false;
    } else if (e.target.classList == 'gameboard-tile' && player1.turn == false && player2.turn == true) {
        gameLogic(player1, player2);
        e.target.appendChild(placeMarker(player2));
        player2.turn = false;
    };
});

xButton.addEventListener('click', () => {
    player1.turn = true;
    console.log(player1.turn);
})
oButton.addEventListener('click', () => {
    player2.turn = true;
})


// console.log(gameLogic(player1, player2));