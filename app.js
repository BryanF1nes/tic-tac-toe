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

console.log(player1, player2);

// Game logic
// Player 1 starts so "turn" turns to true.
// After player 1 places there "marker" set turns to false.
// Player 2 "turn" is now true and can place there "marker".
// player wins when they get one of the following --
// 3 across - horizontally, 3 across vertically, 3 across diagnolly
// a tie occurs when none of those conditions are met.

function gameLogic(p1, p2) {
    if (p1.turn == false && p2.turn == false) {
        p1.turn = true;
        return {p1, p2};
    }

}

console.log(gameLogic(player1, player2));