class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let i = 0
        let j = nums.length - 1
        let result = []
        
        while (i <= j) {
            const LHS = nums[i] * nums[i]
            const RHS = nums[j] * nums[j]
            
            if (RHS > LHS) {
                result.push(RHS)
                j--
            } else {
                result.push(LHS)
                i++
            }
        }

        result.reverse()

        return result
    }
}
