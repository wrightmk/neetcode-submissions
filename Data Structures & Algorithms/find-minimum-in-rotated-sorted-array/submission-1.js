class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let high = nums.length - 1
        let low = 0
        while (high > low) {
            let mid = Math.floor((high+low)/2)
            if (nums[mid] <= nums[high]) {
                high = mid
            } else {
                low = mid + 1
            } 
          
        }   
        return nums[high]
    }
}

//   [6,1,2,3,4,5]
// // l   m     r

//   [3, 4, 5, 6, 1, 2]
// // l     m        r