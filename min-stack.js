// https://leetcode.com/problems/min-stack/description/

class MinStack {
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(val) {
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      let min = Math.min(val, this.minStack[this.minStack.length - 1]);
      this.minStack.push(min);
    }

    this.stack.push(val);
  }

  pop() {
    this.minStack.pop();
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
