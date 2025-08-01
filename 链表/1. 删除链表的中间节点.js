/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    // 空链表 或 只有一个节点
    if (head === null || head.next === null) {
        return null;
    }

    // 计算链表长度
    let size = 1;
    let curr = head;
    while (curr.next !== null) {
        size++;
        curr = curr.next;
    }
    const mid = Math.floor(size / 2);

    // 删除中间节点
    curr = head;
    // 移动到中间节点的前一个位置
    for (let i = 0; i < mid - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;

    return head;
};