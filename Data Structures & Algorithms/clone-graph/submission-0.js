/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null
        
        let oldToNew = new Map()
        function dfs(root) {
            if (oldToNew.has(root)) return oldToNew.get(root)

            const copy = new Node(root.val)
            oldToNew.set(root, copy)
            for (const nei of root.neighbors) { 
                copy.neighbors.push(dfs(nei))
            }
            return copy
        }
        
        return dfs(node)
    }
}
