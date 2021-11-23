const { Stack } = require("./arrStack");

const stack = new Stack();

const infix = "5+3-2+3/9";

let postfix = [],
  i = 0,
  j = 0;

const isOperator = (opr) => {
  if (opr === "/" || opr === "*" || opr === "+" || opr === "-") {
    return 1;
  }
  return 0;
};

const precedence = (char) => {
  if (char === "*" || char === "/") {
    return 2;
  } else if (char === "+" || char === "-") {
    return 1;
  }
  return 0;
};

const validExpMatch = (infix) => {
  while (i < infix.length) {
    const item = infix[i];

    // check for non-operator
    if (!isOperator(item)) {
      postfix[j++] = item;
      i++;
    } else {
      // Precendence checking of the operators
      if (precedence(item) > precedence(stack.stackTop())) {
        stack.push(item);
        i++;
      } else {
        postfix[j++] = stack.pop();
      }
    }
  }

  // Pop the data till the stack gets empty
  while (!stack.isEmpty()) {
    postfix[j++] = stack.pop();
  }

  // Return the string
  return postfix.join(" ");
};

console.log(validExpMatch(infix));
