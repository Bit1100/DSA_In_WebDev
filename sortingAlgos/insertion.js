/* Insertion Sort Algo Analysis
1) Time Complexity - O(n^2) in worst case.
2) Stable Algo as it maintains the order of prev into new.
3) An Adaptive algo..
*/

// Insetion Sort

const arr = [22, 5, 0, 123, 1, 22, 0, 1, 3, 3, 100, -3, 999, 45, 2, 0, -252];

const passArr = [];

function display() {
    console.log(arr.join(" "));
}

const insertionSort = (arr) => {
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        j = i - 1;
        let key = arr[i];
        let isSorted = 1;
        while (j >= 0) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
                isSorted = 0;
            }
            if (arr[j] < key) {
                break;
            }
            j--;
        }
        arr[j + 1] = key;

        if (isSorted) {
            passArr.push(i + 1);
        }
    }

    console.log(
        `\nMessage => Array Sorted at PASS No. ${Math.max(...passArr)}\n`
    );
};

console.log("Array before Insertion sort");
display();

insertionSort(arr);

console.log("Array after Insertion sort");
display();