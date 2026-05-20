class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hash = {}
        for (let num of nums) {
            hash[num] = true
        }

        for (let h in hash) {
            if (parseInt(h) - 1 in hash) {
                hash[h] = false
            }
        }

        let largest = 0
        for (let h in hash) {
            if (hash[h]) {
                // 2, 10, 20
                let starter = [parseInt(h), 1]
                let counter = 1
                while (counter <= nums.length) {
                    if (String(starter[0] + 1) in hash) {
                        starter[0]++
                        starter[1]++
                    }
                    if (starter[1] > largest) {
                        largest = starter[1]
                    }
                    counter++
                }
            }
        }
        return largest
    }
}
