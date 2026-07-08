class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []
        const currentSubset = []

        function backtrack(minValue, i) {
            if (minValue === 0) {
                result.push([...currentSubset])
                return
            }
            if (i === nums.length) return

            if (minValue < 0) {
                return
            }
            currentSubset.push(nums[i])
            backtrack(minValue - nums[i], i)
            currentSubset.pop()
            backtrack(minValue, i+1)
        }

        backtrack(target, 0)

        return result
    }
}
