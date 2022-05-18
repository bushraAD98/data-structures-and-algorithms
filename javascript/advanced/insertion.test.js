'use strict';
const insertionSort = require('./insertion');
describe("Insertion Sort", () => {
  test(" sort", () => {
    const arr = [1, 18, 48, 32, 29, 15];
    expect(insertionSort(arr)).toEqual([1, 15, 18, 29, 32, 48]);
  });

  test("Reverse-sorted", () => {
    const arr = [10, 7, 1, 0, -1, -2];
    expect(insertionSort(arr)).toEqual([-2, -1, 0, 1, 7, 10]);
  });

  test("Few uniques", () => {
    const arr = [1, 2, 2, 3, 3, 4,4];
    expect(insertionSort(arr)).toEqual([1, 2, 2, 3, 3, 4,4]);
  });

  test("Nearly-sorted", () => {
    const arr = [1, 2, 3, 6, 5];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 5, 6]);
  });

  test("empty-array", () => {
    const arr = [];
    expect(insertionSort(arr)).toEqual('empty array');
  });
});
