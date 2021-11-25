/* Merge Sort Algo Analysis
1) Time Complexity - O(nlogn) in worst case and O(n) in best case.
2) Non-Stable Algo as it doesn't maintain the order of prev into new.
3) An Adaptive algo.
*/

// Quick Sort

const arr = [22, 5, 0, 123, 1, 22, 0, 1, 3, 3, 100, -3, 999, 45, 2, 0, -252];
let low = 0;
let high = arr.length - 1;

function display() {
  console.log(arr.join(" "));
}

function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let Xarr = [];

  // Copy into the new array till one of the sorted array reach to its max size
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      Xarr[k] = arr[i];
      i++;
      k++;
    } else {
      Xarr[k] = arr[j];
      j++;
      k++;
    }
  }

  // Copy the rest of the left array into the new array
  while (i <= mid) {
    Xarr[k] = arr[i];
    i++;
    k++;
  }

  // Copy the rest of the right array into the new array
  while (j <= high) {
    Xarr[k] = arr[j];
    j++;
    k++;
  }

  // Re-assigning the new to old array
  for (let m = low; m <= high; m++) {
    arr[m] = Xarr[m];
  }
}

function mergeSort(arr, low, high) {
  let mid;
  if (low < high) {
    mid = Math.floor((low + high) / 2);
    // Breaking of the array into its smallest size possible
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    // merging splitted array into one single array
    merge(arr, low, mid, high);
  }
}

console.log("Array before Merge sort");
display();

mergeSort(arr, low, high);

console.log("Array after Merge sort");
display();
