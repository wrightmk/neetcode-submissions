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
        let arr = []
        let queue = new Queue()
        if (root !== null) {
            queue.push(root)
        }
        
        while (queue.size() > 0) {
            const level = []
            const size = queue.size()
            for (let i=0; i < size; i++) {
                const node = queue.pop()
                level.push(node.val)
                
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            arr.push(level)

        }

        return arr
    }
}
