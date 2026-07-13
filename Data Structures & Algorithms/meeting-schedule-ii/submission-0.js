/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = []
        let end = []
        for (const interval of intervals) {
            start.push(interval.start)
            end.push(interval.end)
        }
        start = start.sort((a,b) => a - b)
        end = end.sort((a,b) => a - b)
        let s = 0
        let e = 0
        let final = 0
        let count = 0
        
        while (s < start.length && e < end.length) {
            if (start[s] < end[e]) {
                s++
                count++
                final = Math.max(count, final)
            } else {
                e++
                count--
            }
        }
       return final
    }
}
