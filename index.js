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

  function firstPlayer() {
    let currentPlayer;

    if (Math.random() >= 0.5) {
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

function checkWinner(board, symbol) {
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === symbol &&
      board[1][i] === symbol &&
      board[2][i] === symbol
    ) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === symbol &&
      board[i][1] === symbol &&
      board[i][2] === symbol
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol) ||
    (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
  ) {
    return true;
  }

  return false;
}

function checkTie(board, player1, player2) {
  const fullBoard = board.every((row) => row.every((cell) => cell !== ''));

  const tie =
    !checkWinner(board, player1.symbol) && !checkWinner(board, player2.symbol);

  return fullBoard && tie;
}

function displayController() {}

//

const player1 = createPlayer('Simon', 'x');
const player2 = createPlayer('Alice', 'o');

const board = gameBoard();
const controller = gameController(player1, player2, board);
let currentPlayer = controller.firstPlayer();

//

board.setBoard();
console.log(board.getBoard());

function play(row, column) {
  const moveValid = controller.makeMove(currentPlayer, row, column);

  if (!moveValid) {
    console.log('Invalid move!');
    return;
  }

  const currentBoard = board.getBoard();

  if (checkWinner(board.getBoard(), currentPlayer.symbol)) {
    console.log(`${currentPlayer.name} wins!`);
    return;
  }

  if (checkTie(currentBoard, player1, player2)) {
    console.log("It's a tie");
    return;
  }

  currentPlayer = controller.switchPlayer(currentPlayer);
  console.log('no winner yet');
}

//WIN
//play(0, 2);
//play(1, 2);
//play(0, 1);
//play(2, 2);
//play(0, 0);

//TIE!
play(1, 1);
play(0, 0);
play(0, 2);
play(0, 1);
play(1, 0);
play(1, 2);
play(2, 1);
play(2, 0);
play(2, 2);
