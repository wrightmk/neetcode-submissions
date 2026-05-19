class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {}
        let buckets = new Array(nums.length + 1)
        const results = []
        for (let num of nums) {
            if (hash[num] || hash[num] === 0) {
                hash[num]++
            } else {
                hash[num] = 1
            } 
        }

        for (let h in hash) {
            if (buckets[hash[h]]) {
                buckets[hash[h]].push(h)
            } else {
                buckets[hash[h]] = [h]
            }
        }
        for (let i = buckets.length; i >= 0; i--) {
            
            if (buckets[i]){
                for (let b of buckets[i]) {
                     if (results.length < k) {
                        results.push(b)
                     } else {
                        return results
                     }
                }
            }
        }

        return results

    }
}
