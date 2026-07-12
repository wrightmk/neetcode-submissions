class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for (let str of strs) {
            result += str.length + '#' + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let result = []
        let i = 0
        while (i < str.length) {
            let j = i

            while (str[j] !== '#') {
                j++
            }
            const len = parseInt(str.slice(i,j))
            const word = str.slice(j+1, j+1+len)
            result.push(word)

            i = j + 1 + len
        }
        // 5#Hello5#World
        // ij 

        return result
    }
}
