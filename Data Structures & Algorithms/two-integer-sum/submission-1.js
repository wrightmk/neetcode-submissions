class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {}
        for (let i = 0; i < nums.length; i++) {
            if ((target - nums[i]) in complements) {
                return [i, complements[target - nums[i]]]
            } else {
                complements[nums[i]] = i
            }

        }
        return []
    }
}
