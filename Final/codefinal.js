let board;
let rows = 6;
let cols = 7;
let cellSize = 80;
let currentPlayer = 1;
let winner = null;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  board = createBoard(rows, cols);
}

function draw() {
  background(255);
  drawBoard(board);
  
  if (winner !== null) {
    textSize(32);
    fill(0);
    textAlign(CENTER);
    text(`Player ${winner} wins!`, width/2, height/2);
  }
}

function createBoard(rows, cols) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

function drawBoard(board) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * cellSize + cellSize / 2;
      let y = i * cellSize + cellSize / 2;
      let d = cellSize - 10;
      if (board[i][j] === 0) {
        fill(255);
      } else if (board[i][j] === 1) {
        fill(255, 0, 0);
      } else {
        fill(255, 255, 0);
      }
      stroke(0);
      ellipse(x, y, d, d);
    }
  }
}

function mousePressed() {
  if (winner !== null) {
    return;
  }
  
  let col = floor(mouseX / cellSize);
  let row = checkRow(col);
  if (row >= 0) {
    board[row][col] = currentPlayer;
    checkWin(row, col);
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
}

function checkRow(col) {
  for (let i = rows - 1; i >= 0; i--) {
    if (board[i][col] === 0) {
      return i;
    }
  }
  return -1;
}

function checkWin(row, col) {
  if (checkHorizontal(row, col) || checkVertical(row, col) || checkDiagonal(row, col)) {
    winner = currentPlayer;
  }
}

function checkHorizontal(row, col) {
  let count = 0;
  for (let j = 0; j < cols; j++) {
    if (board[row][j] === currentPlayer) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
}

function checkVertical(row, col) {
  let count = 0;
  for (let i = 0; i < rows; i++) {
    if (board[i][col] === currentPlayer) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
}

function checkDiagonal(row, col) {
  let count = 0;
  let i = row;
  let j = col;
  while (i > 0 && j > 0) {
    i--;
    j--;
  }
}

function resetGame() {
  setTimeout(() => {
    board = createBoard(rows, cols);
    winner = null;
    currentPlayer = 1;
  }, 10000);
}

function checkWin(row, col) {
  if (checkHorizontal(row, col) || checkVertical(row, col) || checkDiagonal(row, col)) {
    winner = currentPlayer;
    resetGame();
  }
}