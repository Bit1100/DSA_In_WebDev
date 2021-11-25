/*
Count Sort Algo Analysis
1) Time Complexity - O(n) in worst case
2) Can be called Stable or Non-Stable Algo..
3) Adaptive and the fastest Algo.
4) Takes extra space for the auxiliary array.
5) Negative values not allowed in array
*/

// Count Sort

const numArr = [22, 5, 0, 123, 1, 22, 0, 1, 3, 3, 100, 999, 45, 2, 0];

let count = [];

function display() {
  console.log(numArr.join(" ") + "\n");
}

function maxElement(numArr) {
  let max = -Infinity;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

const countSort = (numArr) => {
  //   Elements => Indices => Elements
  const max = maxElement(numArr);

  // Creating auxiliary array with zero of size max+1
  for (let i = 0; i < max + 1; i++) {
    count[i] = 0;
  }

  let i = 0;
  let j = 0;

  // Filling up the numArr array elements to count array as an index
  while (i < numArr.length) {
    count[numArr[i]] = count[numArr[i]] + 1;
    i++;
  }

  i = 0;
  // Sorting the array by filling up numArr array by count array as an element
  while (j < count.length) {
    while (count[j]) {
      numArr[i] = j;
      i++;
      count[j] -= 1;
    }
    j++;
  }
};

console.log("Array before Count sort");
display();

countSort(numArr);

console.log("Array after Count sort");
display();
