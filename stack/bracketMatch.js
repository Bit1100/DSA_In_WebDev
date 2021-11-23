const { Stack } = require("./arrStack");

const stack = new Stack();

const exp = "(a+b)-c";

// Method checking for the exact open and close brackets
const exactMatch = (open, close) => {
  if (open === "(" && close === ")") {
    return 1;
  } else if (open === "{" && close === "}") {
    return 1;
  } else if (open === "[" && close === "]") {
    return 1;
  } else {
    return 0;
  }
};

const multipleParenthesisMatch = (exp) => {
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(" || exp[i] === "{" || exp[i] === "[") {
      stack.push(exp[i]);
    }
    if (exp[i] === ")" || exp[i] === "}" || exp[i] === "]") {
      // If stack is empty, error pops up
      if (stack.isEmpty()) {
        return 0;
      }
      // If the popped bracket doesn\t match with close one, error pops up
      const poppedValue = stack.pop();
      if (!exactMatch(poppedValue, exp[i])) {
        return 0;
      }
    }
  }
  // If stack is not empty, error pops up
  if (!stack.isEmpty()) {
    return 0;
  } else {
    return 1;
  }
};

if (multipleParenthesisMatch(exp)) {
  console.log("Balanced Parenthesis Expression");
} else {
  console.log("Unbalanced Parenthesis Expression");
}
