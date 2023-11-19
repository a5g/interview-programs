/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  let carryOver = 0;

  while (l1 != null || l2 != null || carryOver > 0) {
    let v1 = 0;
    let v2 = 0;

    if (l1 != null) v1 = l1.val;
    if (l2 != null) v2 = l2.val;

    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  return result.next;
};

const a = 123;
const b = 456;
const c = addTwoNumbers(a, b);
console.log(c);
