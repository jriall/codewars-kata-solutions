//https://www.codewars.com/kata/chess-fun-number-1-chess-board-cell-color/train/javascript

// Given two cells on the standard chess board, determine whether they have the same color or not.

// SOLUTION

function whiteOrBlack(cell) {
  const blackFirst = ["A", "C", "E", "G"];
  if (blackFirst.includes(cell[0])) {
    return cell[1] % 2 === 1 ? "black" : "white";
  } else {
    return cell[1] % 2 === 1 ? "white" : "black";
  }
}

function chessBoardCellColor(cell1, cell2) {
  return whiteOrBlack(cell1) === whiteOrBlack(cell2) ? true : false;
}

