'use strict';
const quickSort = require('./quickSort');
describe('quickSort', () => {

    it('Reverse-sorted', () => {
        const arr =  [20,18,12,8,5,-2];
        quickSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([-2,5,8,12,18,20]);
    })

    it('Few uniques', () => {
        const arr =  [5,12,7,5,5,7];
        quickSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([5,5,5,7,7,12]);
    })

    it('Nearly-sorted', () => {
        const arr =[2,3,5,7,13,11];
        quickSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([2,3,5,7,11,13]);
    })

    it('one element', () => {
        const arr =[1];
        quickSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([1]);
    })
})