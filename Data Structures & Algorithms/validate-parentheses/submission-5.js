class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for (const char of s) {
            if (stack.length > 0 && closeToOpen[char] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0
    }
}
