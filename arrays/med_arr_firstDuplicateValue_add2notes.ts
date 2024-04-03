


/**
 * @description AlgoExpert: Medium | Array | First Duplicate Value
 * Given an array of integers btwn 1 and n, inclusive, where n is 
 * the length of the array, write a function that returns the first 
 * integer that appears more than once ( when the array is read left
 * to right)
 * 
 * if not integers appears more than once, return -1. 
 * 
 * you are allowed to mutate the input array. 
 * @summary time 0(n) | space: o(n)
 * @param array
 * @returns 
 */
function firstDuplicateValue(array: number[]): number {
    let seen: number[] = []
    for(let elem of array){
        if(seen.includes(elem)) return elem
        seen.push(elem)
    }
    return -1; 
  }
  
let firstDuplicateValueTest1: number[] = [2, 1, 5, 2, 3, 3, 4];
let firstDuplicateValueTest2: number[] = [2, 1, 5, 3, 3, 2, 4];
let firstDuplicateValueTest4: number[] = [3, 1, 3, 1, 1, 4, 4] //
let firstDuplicateValueTest5: number[] = [] //
let firstDuplicateValueTest6: number[] = [1] //
let firstDuplicateValueTest8: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10] //
let firstDuplicateValueTest13: number[] = [9, 13, 6, 2, 3, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3] //
let firstDuplicateValueTest28: number[] = [11, 10, 5, 3, 1, 7, 10, 6, 10, 11, 7] //
let firstDuplicateValueTest51: number[] = [21, 17, 1, 8, 22, 8, 22, 8, 23, 3, 21, 5, 18, 2, 8, 21, 21, 22, 10, 24, 13, 4, 20, 24] //
let firstDuplicateValueTest61: number[] = [2, 3, 16, 9, 11, 14, 13, 1, 10, 12, 5, 17, 4, 16, 10, 5, 4] //
let firstDuplicateValueTest63: number[] = [6, 15, 7, 10, 9, 14, 10, 1, 10, 1, 2, 11, 1, 6, 8] //

console.log(firstDuplicateValue(firstDuplicateValueTest6))