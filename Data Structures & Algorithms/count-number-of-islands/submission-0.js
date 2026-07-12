class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0
        let rows = grid.length
        let cols = grid[0].length
        let directions = [[0,1], [0,-1], [1,0], [-1,0]]
        let visited = new Set()

        function dfs(grid, r, c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return
            if (grid[r][c] === '0') return
            const key = `${r},${c}`
            if (visited.has(key)) return

            visited.add(key)
            for (const [dr,dc] of directions) {
                dfs(grid, r + dr, c + dc)
            }

        }

        for (let r =0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
                    count++
                    dfs(grid, r, c)
                }
            }
        }


        return count
    }
}
