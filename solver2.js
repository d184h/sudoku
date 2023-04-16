function solver2(sud) {
  const sudoku = sud;
  const findZero = function (board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }
    return null;
  };
  const validator = function (guessNumb, position) {
    const [i, j] = position;
    for (let c = 0; c < 9; c++) {
      if (sudoku[i][c] == guessNumb && [i, c] !== position) return false;
    }
    for (let r = 0; r < 9; r++) {
      if (sudoku[r][j] == guessNumb && [r, j] !== position) return false;
    }
    const rowMin = Math.floor(i / 3) * 3;
    const rowMax = Math.floor(i / 3 + 1) * 3;
    const colMin = Math.floor(j / 3) * 3;
    const colMax = Math.floor(j / 3 + 1) * 3;
    for (let r = rowMin; r < rowMax; r++) {
      for (let c = colMin; c < colMax; c++) {
        if (sudoku[r][c] == guessNumb && [r, c] !== position) return false;
      }
    }
    return true;
  };
  const solve = function () {
    const curPos = findZero(sudoku);
    if (curPos === null) return sudoku;
    const [r, c] = curPos;
    for (let i = 1; i < 10; i++) {
      const guessNumb = i;
      if (validator(guessNumb, [r, c])) {
        sudoku[r][c] = guessNumb;
        if (solve()) {
          return sudoku;
        }
      }
      sudoku[r][c] = 0;
    }
    return false;
  };
  solve();
  return sudoku;
}
module.exports = solver2;
