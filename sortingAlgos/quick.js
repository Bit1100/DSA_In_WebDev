/* Quick Sort Algo Analysis
1) Time Complexity - O(nlogn) in worst case and O(n^2) in best case.
2) Stable Algo as it maintains the order of prev into new.
3) An Non-Adaptive algo.
*/

// Quick Sort

const arr = [22, 5, 0, 123, 1, 22, 0, 1, 3, 3, 100, -3, 999, 45, 2, 0, -252];
let low = 0;
let high = arr.length - 1;

function display() {
  console.log(arr.join(" "));
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low + 1;
  let j = high;

  do {
    // Move to right till you found the greater item than the pivot
    while (arr[i] <= pivot) {
      i++;
    }

    // Move to left till you found the smaller item than the pivot
    while (arr[j] > pivot) {
      j--;
    }

    // Swap the items of ith and jth position
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  } while (i <= j);

  // Swap the jth with a[low] or pivot
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

console.log("Array before Quick sort");
display();

quickSort(arr, low, high);

console.log("Array after Quick sort");
display();
