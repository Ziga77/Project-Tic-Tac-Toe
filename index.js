const gameBoard = () => {
  const rows = 3;
  const columns = 3;
  const board = [];

  function setBoard() {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push('');
      }
    }
    return board;
  }

  function getBoard() {
    return board;
  }

  return {
    setBoard,
    getBoard,
  };
};

function createPlayer(name, symbol) {
  return {
    name,
    symbol,
  };
}

function gameController(player1, player2, board) {
  const rows = 3;
  const columns = 3;

  function firstPlayer(player1, player2) {
    let currentPlayer;

    if (Math.random() >= 0.51) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
    return currentPlayer;
  }

  function makeMove(currentPlayer, row, col) {
    const currentBoard = board.getBoard();

    if (row < 0 || row >= rows || col < 0 || col >= columns) {
      return false;
    }
    if (currentBoard[row][col] !== '') {
      return false;
    }

    currentBoard[row][col] = currentPlayer.symbol;
    return true;
  }

  function switchPlayer(currentPlayer) {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    return currentPlayer;
  }

  return {
    firstPlayer,
    makeMove,
    switchPlayer,
  };
}

function checkWinner() {}

function displayController() {}

//

const player1 = createPlayer('Simon', 'x');
const player2 = createPlayer('Alice', 'o');

const board = gameBoard();
const controller = gameController(player1, player2, board);
let currentPlayer = controller.firstPlayer(player1, player2);

//

board.setBoard();
console.log(board.getBoard());

controller;

console.log(controller.makeMove(currentPlayer, 0, 2));
currentPlayer = controller.switchPlayer(currentPlayer);

console.log(controller.makeMove(currentPlayer, 1, 2));
currentPlayer = controller.switchPlayer(currentPlayer);

console.log(controller.makeMove(currentPlayer, 2, 2));
currentPlayer = controller.switchPlayer(currentPlayer);

console.log(controller.makeMove(currentPlayer, 0, 1));
currentPlayer = controller.switchPlayer(currentPlayer);
