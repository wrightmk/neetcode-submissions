class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0])
        let result = []
        let current = intervals[0]
        for (let i=1; i < intervals.length; i++) {
            console.log(current)
            if (intervals[i][0] > current[1]) {
                result.push(current)
                current = intervals[i]
            } else {
                current = [
                    Math.min(intervals[i][0], current[0]),
                    Math.max(intervals[i][1], current[1])
                ]
            }
        }
        result.push(current)
        return result
    }
}
