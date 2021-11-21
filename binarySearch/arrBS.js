// Number array literal
const numArr = [5, 10, 40, 44, 50, 65, 122, 256, 350, 489, 850, 998];

// Target to be found
const element = 10;

// Binary Search for the sorted array.
const arrBinarySearch = (e) => {
  let low = 0;
  let high = numArr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (numArr[mid] === e) {
      return { index: mid, success: 1 };
    }

    if (numArr[mid] > e) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return { index: -1, success: -1 };
};

const { success, index } = arrBinarySearch(element);

if (success === 1) {
  console.log(`We found the MATCH at index ${index}`);
} else {
  console.log(`Sorry, no such element in the record returning ${index}`);
}

// The time complexity of the binary search is O(logn);
