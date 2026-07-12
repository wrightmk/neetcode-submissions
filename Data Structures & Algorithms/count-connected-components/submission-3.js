class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = Array.from({length: n}, () => [])
        for (let [u,v] of edges) {
            adjList[u].push(v)
            adjList[v].push(u)
        }
        let count = 0
        const visited = new Set()

        function dfs(root) {
            if (visited.has(root)) return
            visited.add(root)
            for (const nei of adjList[root]) {
                dfs(nei)
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i)
                count++
            }
        }


        return count

    }
}
