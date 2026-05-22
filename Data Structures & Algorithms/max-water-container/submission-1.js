class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0
        let i = 0
        let j = heights.length - 1
        while (i <= j) {
            const h = Math.min(heights[i], heights[j])
            const w = (j - i)
            area = Math.max(area, h * w)

            if (heights[i] <= heights[j]) {
                i++
            } else if (heights[i] > heights[j]) {
                j--
            } 

        }
    
        return area
    }
}
