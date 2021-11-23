const { Stack } = require("./arrStack");

// Creating the stack object to use it
const stack = new Stack();

// Stack Push
console.log("Stack Push and Transverse");
stack.push(5);
stack.push(3);
stack.push(9);
stack.push(7);
stack.push(1);
stack.push("a");
stack.peek();
stack.length();

// Stack Pop
console.log("Stack Pop && Transversal");
stack.pop();
stack.pop();
stack.peek();
stack.length();

const key = 9;
console.log("Stack Search");
const { index, success } = stack.search(key);

success && console.log(`Key - ${key} found at index ${index}`);

success || console.log(`Key - ${key} is not found in the stack`);

console.log("Stack Reverse");
stack.reverse();
stack.peek();
stack.length();

console.log("Search in Reverse Stack");
stack.search(key).success &&
  console.log(`Key - ${key} found at index ${stack.search(key).index}`);

stack.search(key).success ||
  console.log(`Key - ${key} is not found in the stack`);
