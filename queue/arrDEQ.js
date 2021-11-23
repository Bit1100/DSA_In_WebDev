/* Array Implementation of DEQueue */
class DEQueue {
  constructor() {
    this.size = 5;
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

  enqueueFront(val) {
    if (this.isFull()) {
      console.log("Queue is Full!");
    } else if (--this.front < -1) {
      this.front = -1;
      console.log("Item cannot be added frontside");
    } else {
      this.array[this.front + 1] = val;
    }
  }

  enqueueRear(val) {
    if (this.isFull()) {
      console.log("Queue is Full!");
    } else {
      this.rear += 1;
      this.array[this.rear] = val;
    }
  }

  dequeueFront() {
    let popItem = -1;
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
    } else {
      this.front += 1;
      popItem = this.array[this.front];
    }
    return popItem;
  }

  dequeueRear() {
    let popItem = -1;
    if (this.isEmpty()) {
      console.log("Queue is Empty!");
    } else if (--this.rear < this.front) {
      console.log("Cannot Dequeue due to empty condition!");
    } else {
      popItem = this.array[this.rear + 1];
      return popItem;
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
  DEQueue,
};
