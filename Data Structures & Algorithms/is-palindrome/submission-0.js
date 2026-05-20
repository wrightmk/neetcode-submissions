class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
        return s.split('').reverse().join('') === s
    }
}
