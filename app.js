// Variables
function Player(name, marker, turn) {
  this.name = name;
  this.marker = marker;
  this.turn = turn;
  return { name, marker, turn };
}

// Setting up the players
const player1 = new Player("Bryan", "X", false);
const player2 = new Player("Grace", "O", false);
const xButton = document.querySelector(".X");
const oButton = document.querySelector(".O");
let gameboard = ["", "", "", "", "", "", "", "", ""];

function generateGameBoard() {
  const gameboardDiv = document.querySelector(".gameboard");
  let id = 0;
  gameboard.forEach((tile) => {
    const div = document.createElement("div");
    div.classList.add("gameboard-tile");
    div.id = id++;
    div.addEventListener("click", (e) => {
      let divId = e.target.id;
      gameboard[divId] = player1.turn ? player1.marker : player2.marker;
      e.target.textContent = gameboard[divId];

      processMove(gameboard[divId]);
    });
    gameboardDiv.appendChild(div);
  });
}

const processMove = (ch) => {
  if (checkVictory(ch)) {
  } else {
    if (player1.turn) {
      player1.turn = false;
      player2.turn = true;
    } else {
      player1.turn = true;
      player2.turn = false;
    }
  }
};

const checkVictory = (ch) => {
  console.log(gameboard);
  return (
    (gameboard[0] == ch && gameboard[1] == ch && gameboard[2] == ch) ||
    (gameboard[3] == ch && gameboard[4] == ch && gameboard[5] == ch) ||
    (gameboard[6] == ch && gameboard[7] == ch && gameboard[8] == ch) ||
    (gameboard[0] == ch && gameboard[3] == ch && gameboard[6] == ch) ||
    (gameboard[1] == ch && gameboard[4] == ch && gameboard[7] == ch) ||
    (gameboard[2] == ch && gameboard[5] == ch && gameboard[8] == ch) ||
    (gameboard[0] == ch && gameboard[4] == ch && gameboard[8] == ch) ||
    (gameboard[2] == ch && gameboard[4] == ch && gameboard[6] == ch)
  );
};

generateGameBoard();

xButton.addEventListener("click", () => {
  if ((player2.turn = true)) {
    player2.turn = false;
  }
  player1.turn = true;
});
oButton.addEventListener("click", () => {
  if ((player1.turn = true)) {
    player1.turn = false;
  }
  player2.turn = true;
});

// console.log(gameLogic(player1, player2));
