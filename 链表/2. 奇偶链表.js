/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head === null || head.next === null) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;    // 保存偶数链表的头节点

    while (even !== null && even.next !== null) {
        odd.next = even.next;   // 奇数指针 -> 下一个奇数指针
        odd = odd.next;         // 移动奇数指针
        even.next = odd.next;   // 偶数指针 -> 下一个偶数节点
        even = even.next;       // 移动偶数指针
    }

    odd.next = evenHead;

    return head;
};