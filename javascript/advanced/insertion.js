'use strict';

function insertionSort(arr) {

    if(arr.length == 0) return "empty array";
    
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }

  return arr;
}
module.exports = insertionSort;