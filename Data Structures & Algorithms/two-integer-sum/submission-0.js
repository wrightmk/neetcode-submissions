class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {}
        const result = []
        for (let i = 0; i < nums.length; i++) {
            if (complements[nums[i]] || complements[nums[i]] === 0) {
                result.push(complements[nums[i]])
                result.push(i)
            } else {
                complements[target - nums[i]] = i
            }      

        }

        return result;
    }
}
