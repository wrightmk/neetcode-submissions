class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = []
        for (let i = 0; i < intervals.length; i++) {
            if (newInterval[1] < intervals[i][0]) { 
                result.push(newInterval)
                for (let j = i; j < intervals.length; j++) {
                    result.push(intervals[j])
                } 
                return result
            } else if (newInterval[0] > intervals[i][1]) {
                result.push(intervals[i])
            } else {
                 newInterval = [
                    Math.min(newInterval[0], intervals[i][0]), 
                    Math.max(newInterval[1], intervals[i][1])
                ]
            }
        }
        result.push(newInterval)

        return result
    }
}
