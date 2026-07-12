class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0
        const adjList = new Map()
        for (const [u,v] of edges) {
            if (!adjList.has(u)) adjList.set(u, [])
            if (!adjList.has(v)) adjList.set(v, [])

            adjList.get(u).push(v)
            adjList.get(v).push(u)
        }

        let visited = new Set()

        function dfs(node) {
            if (visited.has(node)) return
            visited.add(node)
            const neighbors = adjList.get(node) || []
            for (const next of neighbors) {
                dfs(next)
            }
        }

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue
            dfs(i)
            count++
        }

        return count
    }
}
