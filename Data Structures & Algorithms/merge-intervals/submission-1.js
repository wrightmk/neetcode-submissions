class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0])
        let result = []
        result.push(intervals[0])

        for (const interval of intervals) {
            const start = interval[0]
            const end = interval[1]
            const lastEnd = result[result.length - 1][1]

            if (start <= lastEnd) {
                result[result.length - 1][1] = Math.max(lastEnd, end)
            } else {
                result.push([start,end])
            }
        }

        return result


        // for (let i=1; i < intervals.length; i++) {
        //     console.log(current)
        //     if (intervals[i][0] > current[1]) {
        //         result.push(current)
        //         current = intervals[i]
        //     } else {
        //         current = [
        //             Math.min(intervals[i][0], current[0]),
        //             Math.max(intervals[i][1], current[1])
        //         ]
        //     }
        // }
        // result.push(current)
        // return result
    }
}
