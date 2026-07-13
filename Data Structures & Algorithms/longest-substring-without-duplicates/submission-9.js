class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substr = new Set()
        let r = 0
        let max = 0

        while (r < s.length) {
            if (substr.has(s[r])) {
                for (const letter of substr) {
                    substr.delete(letter)

                    if (letter === s[r]) {
                        break
                    } 
                }
            } 
            substr.add(s[r])
            max = Math.max(max, substr.size)
            r++

        }
        return max
    }
}
