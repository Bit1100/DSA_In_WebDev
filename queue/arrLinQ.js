/* Array Implementation of Linear Queue */
class LinearQueue {
  constructor() {
    this.size = 10;
    this.front = -1;
    this.rear = -1;
    this.array = [];
  }

  isEmpty() {
    if (this.front === this.rear) {
      return 1;
    }
    return 0;
  }

  isFull() {
    if (this.rear > this.size - 1) {
      return 1;
    }
    return 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log("Queue is Full!");
    } else {
      this.rear += 1;
      this.array[this.rear] = val;
    }
  }

  dequeue() {
    let popItem = -1;
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
    } else {
      this.front += 1;
      popItem = this.array[this.front];
    }
    return popItem;
  }

  peek() {
    let current = this.front + 1;
    while (current !== this.rear + 1) {
      console.log(this.array[current]);
      current++;
    }
  }
}

module.exports = {
  LinearQueue,
};
