class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0
        let j = 0
        let result = 0
        
        while (i < prices.length) {
            j++
            if (prices[i] < prices[j]) {
                result = Math.max(result, prices[j] - prices[i])
            } else {
                i = j
            }
        }

        return result
    }
}
