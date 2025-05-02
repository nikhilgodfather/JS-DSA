// function createMatrix(n, fillValue = 0) {
//   const matrix = [];
//   for (let i = 0; i < n; i++) {
//     const row = new Array(n).fill(fillValue);
//     matrix.push(row);
//   }
//   return matrix;
// }

// function insertNumber(matrix, row, col, value) {
//   if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
//     matrix[row][col] = value;
//   } else {
//     console.log("Invalid position!");
//   }
// }

// // Example Usage:
// const n = 5;
// const matrix = createMatrix(n);

// // Insert number 1 at (2, 3)
// insertNumber(matrix, 2, 3, 1);

// // Print the matrix
// matrix.forEach((row) => console.log(row.join(" ")));

function getDiagonals(n, i, j) {
  const diagonals = {
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: [],
  };

  // Top-left ↖️
  for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
    diagonals.topLeft.push([i - k, j - k]);
  }

  // Top-right ↗️
  for (let k = 1; i - k >= 0 && j + k < n; k++) {
    diagonals.topRight.push([i - k, j + k]);
  }

  // Bottom-left ↙️
  for (let k = 1; i + k < n && j - k >= 0; k++) {
    diagonals.bottomLeft.push([i + k, j - k]);
  }

  // Bottom-right ↘️
  for (let k = 1; i + k < n && j + k < n; k++) {
    diagonals.bottomRight.push([i + k, j + k]);
  }

  return diagonals;
}

// Example usage:
const n = 4;
const row = 1,
  col = 1;
console.log(getDiagonals(n, row, col));
