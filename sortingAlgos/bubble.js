/* Bubble Sort Algo Analysis
1) Time Complexity - O(n^2) in worst cases.
2) Stable Algo as it maintains the order of prev into new.
3) Not an Adaptive algo, however can be made..
*/

// Bubble Sort

const arr = [22, 5, 1, 8, 22, 0, 1, 3, 3, 100, -3, 999, 45, 2, 0];
let count = 0;
function display() {
  console.log(arr.join(" "));
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let adaptive = 1;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        adaptive = 0;
        count++;
      }
    }

    // Executes only if sorted array inserted into the function
    if (!count && adaptive) {
      console.log("\nMessage :-) Sorted Array Found\n");
      return;
    }

    // Executes only if sorting completee before or at the final Pass.
    if (count && adaptive) {
      console.log(`\nMessage :-) Sorting completed at Pass No. ${i + 1}\n`);
      return;
    }
  }
};

console.log("Array before bubble sort");
display();

bubbleSort(arr);
console.log("Array after bubble sort");
display();
