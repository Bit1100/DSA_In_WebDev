/*
 1)  Create a Stack with array implementation
 2) Add methods in Stack -
  push().
  pop(),
  isEmpty(),
  isFull(),
  length(),
  peek(),
  search(),
  reverse()
*/

class Stack {
  constructor() {
    this.size = 20;
    this.top = -1;
    this.array = [];
  }

  isEmpty() {
    if (this.top === -1) {
      return 1;
    }
    return 0;
  }

  isFull() {
    if (this.top === this.size - 1) {
      return 1;
    }
    return 0;
  }

  length() {
    console.log(`THe length of the stack is ${this.top + 1}`);
  }

  stackTop() {
    return this.array[this.top];
  }

  stackBottom() {
    return this.array[0];
  }

  push(value) {
    if (this.isFull()) {
      return "Stack is Overflown";
    } else {
      this.array.push(value);
      this.top += 1;
      return `${value} pushed to Stack at index ${this.top}`;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Underflown";
    } else {
      const popVal = this.array[this.top];
      this.array.pop();
      this.top -= 1;
      return popVal;
    }
  }

  peek() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.array[i]);
    }
  }

  search(key) {
    let low = 0;
    let high = this.top;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (this.array[mid] === key) {
        return { index: mid, success: 1 };
      }

      if (this.array[mid] > key) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return { index: -1, success: 0 };
  }

  insertAtBottom(e) {
    if (!this.isEmpty()) {
      this.push(e);
      return;
    }
    const topElement = this.pop();
    this.insertAtBottom(e);
    this.push(topElement);
  }

  reverse() {
    if (!this.isEmpty()) {
      return;
    }
    const element = this.pop();
    this.reverse();
    this.insertAtBottom(element);
  }
}

module.exports = {
  Stack,
};
