class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let L = 0
        let R = nums.length - 1
        let result = [Infinity, -Infinity]

        while (L <= R) {
            let MID = Math.floor((L + R) / 2)

            if (target >= nums[MID]) {
                L = MID + 1
                if (target === nums[MID]) {
                    result[1] = Math.max(result[1], MID)
                }
            } else {
                R = MID - 1
            }

        }

        L = 0
        R = nums.length - 1
        while (L <= R) {
            let MID = Math.floor((L + R) / 2)

            if (target <= nums[MID]) {
                R = MID - 1
                if (target === nums[MID]) {
                    result[0] = Math.min(result[0], MID)
                }
            } else {
                L = MID + 1
           
            }

        }

        if (result[0] === Infinity || result[1] === -Infinity) {
            result = [-1,-1]
        }
        
        return result
    }
}
