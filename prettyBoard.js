function prettyBoard(board) {
  if (typeof board === "string") {
    return board;
  }
  const arr = [[], ["--Судоку решена!--"], []];
  for (let i = 0; i < board.length; i += 1) {
    arr.push(board[i].join("|").split(","));
    arr.push(["- - - - - - - - -"]);
  }
  const newArr = [];
  for (let j = 0; j < arr.length; j += 1) {
    newArr.push(arr[j].join(""));
  }
  newArr.pop();
  const resultString = newArr.join("\n");
  return resultString + "\n";
}
