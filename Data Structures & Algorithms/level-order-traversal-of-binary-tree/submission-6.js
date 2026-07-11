/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = []

        function dfs(root, i) {
            if (!root) return null
            
            if (!result[i]) {
                result.push([root.val])
            } else {
                result[i].push(root.val)
            }
            dfs(root.left, i + 1)
            dfs(root.right, i + 1)
        }

        dfs(root, 0)

        return result
    }
}
