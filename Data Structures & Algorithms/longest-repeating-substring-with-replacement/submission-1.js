class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        // A B C C C
        //       R
        // k = 2

        let len = 0
        let hash = new Map()
        let maxFreq = 0
        let result = 0

        for (let r = 0; r < s.length; r++) { 
            hash.set(s[r], (hash.get(s[r]) || 0) + 1)
            maxFreq = Math.max(maxFreq, hash.get(s[r]))
            hash.get(s[r])
            const repl = (r - l + 1) - maxFreq
            
            if (repl > k) {
                hash.set(s[l], hash.get(s[l]) - 1) 
                l++
            }
            result = Math.max(len, r - l + 1)
        }

        return result
    }
}
