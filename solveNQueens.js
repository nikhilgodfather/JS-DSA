var solveNQueens = function (n) {
  const results = [];

  const backtrack = (row, cols, diag1, diag2, board) => {
    if (row === n) {
      results.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) continue;

      // Place queen
      const rowStr = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
      board.push(rowStr);
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);

      backtrack(row + 1, cols, diag1, diag2, board);

      // Backtrack
      board.pop();
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  };

  backtrack(0, new Set(), new Set(), new Set(), []);
  return results;
};

// Example usage
console.log(solveNQueens(4));

//Option 2

function solveNQueens(n) {
  const results = [];

  function isSafe(row, col, board) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check ↖ diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check ↗ diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row, board) {
    if (row === n) {
      results.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, board)) {
        board[row][col] = "Q";
        backtrack(row + 1, board);
        board[row][col] = "."; // Backtrack
      }
    }
  }

  const emptyBoard = Array.from({ length: n }, () => Array(n).fill("."));
  backtrack(0, emptyBoard);
  return results;
}

// Example usage:
console.log(solveNQueens(4));
