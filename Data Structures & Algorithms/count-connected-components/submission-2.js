class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0
        let adjList = Array.from({length: n}, () => [])
        for (const [u,v] of edges) {
            adjList[u].push(v)
            adjList[v].push(u)
        }

        function dfs(node) {
            if (visited.has(node)) return
            visited.add(node)
            const neighbors = adjList[node] || []
            for (const next of neighbors) {
                dfs(next)
            }
        }

        const visited = new Set()

        for (let i=0; i < n; i++) {
            if (visited.has(i)) continue
            dfs(i)
            count++
        }


        return count
    }
}
