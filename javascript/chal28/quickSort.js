'use strict';
function quickSort(arr, start, end) {

    if (arr.length == 1) return arr;
    if (start >= end) return;

    let pivot = partition(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let pivotIndex = start;
    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            swap(arr, pivotIndex, j);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, pivotIndex, j) {
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[j];
    arr[j] = temp;
}

module.exports = quickSort;