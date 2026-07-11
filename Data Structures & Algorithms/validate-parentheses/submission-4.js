class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(string) {
        let stack = []
        for (const s of string) {
            if (s === '(' || s === '{' || s === '[') {
                stack.push(s)
            } else {
                let pop = stack.pop()
                console.log(pop, s)
                if (pop === '(' && s !== ')' || 
                    pop === '{' && s !== '}' ||
                    pop === '[' && s !== ']' || 
                    !pop
                ) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
