/*
Selection Sort Algo Analysis
1) Time Complexity - O(n^2) in worst case.
2) Non-Stable Algo as it doesn't maintain the order of prev into new.
3) Non-Adaptive algo..
4) No of swapping is less.
*/

// Selection Sort

const arr = [22, 5, 0, 123, 1, 22, 0, 1, 3, 3, 100, -3, 999, 45, 2, 0, -252];

function display() {
    console.log(arr.join(" ") + "\n");
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        let isSwap = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
                isSwap = true;
            }
        }
        if (isSwap) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
};

console.log("Array before Selection sort");
display();

selectionSort(arr);

console.log("Array after Selection sort");
display();