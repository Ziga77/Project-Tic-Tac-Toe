const gameBoard = () => {
  const rows = 3;
  const columns = 3;
  const board = [];

  function getBoard() {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push('');
      }
    }
    return board;
  }

  function firstPlayer() {
    let currentPlayer;

    if (Math.random() >= 0.51) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    return currentPlayer;
  }

  function makeMove(currentPlayer, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= columns) {
      return false;
    }
    if (board[row][col] !== '') {
      return false;
    }

    if (currentPlayer === 0) {
      symbol = 'x';
    } else {
      symbol = 'o';
    }

    board[row][col] = symbol;

    return symbol;
  }

  function switchPlayer(currentPlayer) {
    if (currentPlayer === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    return currentPlayer;
  }

  return {
    getBoard,
    firstPlayer,
    makeMove,
    switchPlayer,
  };
};

const game = gameBoard();

game.getBoard();
console.log(game.getBoard());

let currentPlayer = game.firstPlayer();

console.log(game.makeMove(currentPlayer, 0, 2));
currentPlayer = game.switchPlayer(currentPlayer);

console.log(game.makeMove(currentPlayer, 1, 2));
currentPlayer = game.switchPlayer(currentPlayer);

console.log(game.makeMove(currentPlayer, 2, 2));
currentPlayer = game.switchPlayer(currentPlayer);

console.log(game.makeMove(currentPlayer, 0, 1));
currentPlayer = game.switchPlayer(currentPlayer);
