class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = []
        const obj = {}
    
        for (let str of strs) {
            const hash = Array.from({length: 26}, () => 0)

            for (let s of str) {
                const key = s.charCodeAt(0) - 'a'.charCodeAt(0)
                hash[key]++
            }

            if (obj[hash]) {
                obj[hash].push(str)
            } else {
                obj[hash] = [str]
            } 
        }

        return Object.values(obj)
    }
}
