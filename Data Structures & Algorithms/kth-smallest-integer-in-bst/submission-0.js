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
     * @param {number} k
     * @return {number}
     */

    kthSmallest(root, k) {
        if (!root) return 0
        if (this.global) return this.global
        this.kthSmallest(root.left, k)
        console.log(this.counter)
        this.counter = this.counter ? this.counter + 1 : 1
        if (this.counter === k) {
            this.global = root.val
        }
        this.kthSmallest(root.right, k)

        return this.global
    }
}
