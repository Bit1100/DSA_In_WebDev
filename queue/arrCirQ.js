/* Array Implementation of Circular Queue */
class CircularQueue {
  constructor() {
    this.size = 4;
    this.front = 0;
    this.rear = 0;
    this.array = [];
  }

  isEmpty() {
    if (this.front === this.rear) {
      return 1;
    }
    return 0;
  }

  isFull() {
    if ((this.rear + 1) % this.size === this.front) {
      return 1;
    }
    return 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log("Queue is Full!");
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.array[this.rear] = val;
      console.log("Enqueued ", val);
    }
  }

  dequeue() {
    let popItem = -1;
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
    } else {
      this.front = (this.front + 1) % this.size;
      popItem = this.array[this.front];
      console.log("Dequeued ", popItem);
    }
    return popItem;
  }

  peek() {
    let current = (this.front + 1) % this.size;
    while (current !== (this.rear + 1) % this.size) {
      console.log(this.array[current]);
      current = (current + 1) % this.size;
    }
  }
}

module.exports = {
  CircularQueue,
};
