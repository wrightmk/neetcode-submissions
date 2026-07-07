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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = ''
        function dfs(root) {
            if (!root) {
                res+= ',N'
                return null
            }

            if (res.length === 0) {
                res += root.val
            } else {
                res+= ',' + root.val 
            }
            dfs(root.left)
            dfs(root.right)
        }
        dfs(root)

        return res
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(',')
        let i = 0
        function dfs(arr) {
            if (i > arr.length - 1) return null
            if (arr[i] === 'N') {
                i++
                return null
            }

            const root = new TreeNode(arr[i])
            i++
            root.left = dfs(arr)
            root.right = dfs(arr)

            return root
        }

        return dfs(arr)
    }
}
