// https://leetcode.com/problems/odd-even-linked-list/

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let oddList = new ListNode(-1);
  let evenList = new ListNode(-1);
  let oddHead = oddList;
  let evenHead = evenList;
  let index = 1;
  let current = head;

  while (current !== null) {
    if (index % 2 === 1) {
      oddList.next = current;
      oddList = oddList.next;
    } else {
      evenList.next = current;
      evenList = evenList.next;
    }

    index += 1;
    current = current.next;
  }

  oddList.next = evenHead.next;
  evenList.next = null;

  return oddHead.next;
};

// const five = new ListNode(5, null);
// const four = new ListNode(4, five);
const three = new ListNode(3);
const two = new ListNode(2, three);
let head = new ListNode(1, two);

const res = oddEvenList(head);

while (head) {
  console.log(head.val);
  head = head.next;
}
