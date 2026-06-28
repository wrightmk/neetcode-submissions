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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null
      

        function mergeTwoLists(list1, list2) {
            let dummy = new ListNode(null)
            let node = dummy
            while (list1 && list2) {
                if (list1.val < list2.val) {
                    node.next = list1
                    list1 = list1.next
                } else {
                    node.next = list2
                    list2 = list2.next
                }
                node = node.next
            }

            if (list1) {
                node.next = list1
            } else {
                node.next = list2
            }
            return dummy.next
        }

        let acc = lists[0]
        for (let i = 1; i < lists.length; i++) {
            acc = mergeTwoLists(acc, lists[i])
        }

        return acc
    }
}
