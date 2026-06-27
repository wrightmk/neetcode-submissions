/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let fast = head
        let slow = head
        while (fast !== null && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        
        let prev = null
        let cur = slow
        while (cur) {
            let temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        
        let isFast = true
        let dummy = {val: 0, next: null}
        let node = dummy
        while (head && prev) {
            if (isFast) {
                node.next = head
                head = head.next
                isFast = false
            } else {
                node.next = prev
                prev = prev.next
                isFast = true
            }
            node = node.next
        }
        return dummy.next
    }
}
