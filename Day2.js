var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const dfs = (i, j, index) => {
        // If all the characters are matched
        if (index === word.length) return true;
        
        // If out of bounds or the current letter doesn't match the word's letter
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[index]) return false;
        
        // Temporarily mark the current cell as visited
        const temp = board[i][j];
        board[i][j] = '#';
        
        // Explore all four possible directions: up, down, left, right
        const found = dfs(i + 1, j, index + 1) ||  // down
                      dfs(i - 1, j, index + 1) ||  // up
                      dfs(i, j + 1, index + 1) ||  // right
                      dfs(i, j - 1, index + 1);    // left
        
        // Restore the cell after backtracking
        board[i][j] = temp;
        
        return found;
    };
    
    // Traverse each cell in the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Start DFS if the first letter matches
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};
//data
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")