const { LinearQueue } = require("./arrLinQ");
const { CircularQueue } = require("./arrCirQ");
const { DEQueue } = require("./arrDEQ");

/* Linear Queue Usage */
const lq = new LinearQueue();

console.log("Linear Queue Execution");
console.log("Enqueue");
lq.enqueue(6);
lq.enqueue(3);
lq.enqueue(1);
lq.enqueue(3);
lq.peek();

console.log("Dequeue");
lq.dequeue();
lq.dequeue();
lq.peek();

/* Circular Queue Usage */
const cq = new CircularQueue();

console.log(`
Circular Queue Execution`);
console.log("Enqueue Elements");
cq.enqueue(6);
cq.enqueue(3);
cq.enqueue(1);
cq.enqueue(3);

console.log("Peeking Elements");
cq.peek();

console.log("Dequeue Elements");
cq.dequeue();
cq.dequeue();
cq.enqueue(7);
cq.enqueue(9);

console.log("Peeking Elements");
cq.peek();

const deq = new DEQueue();

console.log(`
Double Ended Queue Execution`);
console.log("Enqueue");
deq.enqueueRear(6);
deq.enqueueRear(7);
deq.enqueueRear(1);
deq.enqueueRear(3);
deq.peek();

console.log("Dequeue");
deq.dequeueFront();
deq.enqueueFront(0);
deq.enqueueRear(20);
deq.dequeueRear();
deq.enqueueRear(30);
deq.peek();
