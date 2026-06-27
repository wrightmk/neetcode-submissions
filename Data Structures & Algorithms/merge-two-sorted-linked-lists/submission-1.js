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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2
        if (!list2) return list1
        let temp
        let initialNode
        if (list1.val < list2.val) {
            initialNode = list1
            list1 = list1.next
        } else {
            initialNode = list2
            list2 = list2.next
        }

        let list3 = initialNode
        let cur = list3

        function takeFromList1() {
            temp = list1
            cur.next = temp
            cur = cur.next
            list1 = list1.next
        }

        function takeFromList2() {
            temp = list2
            cur.next = temp
            cur = cur.next
            list2 = list2.next
        }
        
        while(list1 || list2) {
            if (!list1) {
                takeFromList2()
            } else if (!list2) {
                takeFromList1()
            } else {
                if(list1.val < list2.val) {
                    takeFromList1()
                } else {
                    takeFromList2()
                }
            }
        }

        return list3
    }
}
