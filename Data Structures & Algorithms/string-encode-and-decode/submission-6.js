class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return ''
        let result = ''
        for (let i=0; i<strs.length; i++) {
            result += strs[i].length
            result += ':'
            result += strs[i]
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return []
        if (!str) return []
        let result = []
        let separatorIndex = 0
        let cursor = 0
        // 5:Hello5:World
        // ^
        while (separatorIndex >= 0) {
            separatorIndex = str.indexOf(":", cursor)
            if (separatorIndex === -1) break
            const count = parseInt(str.slice(cursor, separatorIndex))
            const string = str.slice(separatorIndex + 1, separatorIndex + 1 + count)
            result.push(string)
            cursor = separatorIndex + 1 + count
        }
    
        return result
    }
}
