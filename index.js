console.log('hi');

/*function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push('');
    }
  }

  return board;
}*/

const gameBoard = () => {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push('');
    }
  }

  function firstPlayer() {
    let player;

    if (Math.random() >= 0.51) {
      player = 1;
    } else {
      player = 0;
    }
    return player;
  }

  function makeMove(player, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= columns) {
      return false;
    }
    if (board[row][col] !== '') {
      return false;
    }

    let symbol;

    if (player === 0) {
      symbol = 'x';
    } else {
      symbol = 'o';
    }

    board[row][col] = symbol;

    return symbol;
  }

  return {
    board,
    firstPlayer,
    makeMove,
  };
};

const game = gameBoard();

console.log(game.board);

console.log(game.makeMove(game.firstPlayer(), 0, 2));
console.log(game.makeMove(game.firstPlayer(), 1, 2));
console.log(game.makeMove(game.firstPlayer(), 2, 2));
console.log(game.makeMove(game.firstPlayer(), 0, 1));
