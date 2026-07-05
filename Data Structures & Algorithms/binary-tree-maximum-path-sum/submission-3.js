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
     * @return {number}
     */
    maxPathSum(root) {
        let ans = [root.val]

        function dfs(root, nosplit) {
            if (!root) return 0
    
            const leftGain = dfs(root.left, nosplit)
            const rightGain = dfs(root.right, nosplit)
            
            const split = root.val + leftGain + rightGain
          
            nosplit = Math.max(root.val + leftGain, root.val + rightGain, 0)

            ans[0] = Math.max(ans[0], split)

            return nosplit
        }
        dfs(root)

        return ans[0]
    }
}
