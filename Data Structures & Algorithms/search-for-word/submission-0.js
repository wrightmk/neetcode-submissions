class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    
    exist(board, word) {
        let visited = new Set()

        function dfs(row, col, i) {
            if (i >= word.length) return true
            if (row >= board.length || col >= board[0].length || row < 0 || col < 0) return false
            if (board[row][col] !== word[i]) return false
            const key = `${row},${col}`
            if (visited.has(key)) return false

            visited.add(key)

            const found = dfs(row, col + 1, i + 1) ||
                          dfs(row, col - 1, i + 1) ||
                          dfs(row + 1, col, i + 1) ||
                          dfs(row - 1, col, i + 1) 

            visited.delete(key)
            return found
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (dfs(row, col, 0)) return true
            }
        }

        return false
    }
}
