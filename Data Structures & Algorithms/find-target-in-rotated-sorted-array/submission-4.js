class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        while (l <= r){
            let mid = Math.floor((l+r)/2)

            if (nums[mid] === target) return mid

            if (nums[l] <= nums[mid]){
                if (target >= nums[l] && target <= nums[mid]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            } else {
                if (target >= nums[mid] && target <= nums[r]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }

// Is left half sorted? (nums[l] <= nums[mid])
// ├── Yes: is target in [nums[l], nums[mid])?
// │         ├── Yes: search left  (r = mid - 1)
// │         └── No:  search right (l = mid + 1)
// └── No (so right half is sorted): is target in (nums[mid], nums[r]]?
//           ├── Yes: search right (l = mid + 1)
//           └── No:  search left  (r = mid - 1)

        return nums[r] === target ? r : -1
    }
}
