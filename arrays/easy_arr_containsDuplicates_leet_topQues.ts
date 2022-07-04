/**
 * easy - Leet/Neet - Array/Object - Contains Duplicate
 * @description
 * Given an integer array nums, return true if any value 
 * appears at least twice in the array, and return false 
 * if every element is distinct. 
 * 
 * source: https://leetcode.com/problems/contains-duplicate/
 * @summary
 * - create object
 * - record each occurrence 
 * - if there is a value > 2 in values() return true
 * @param nums 
 * @returns 
 */
function containsDuplicate(nums: number[]): boolean {
    let dict: {[key:number]: number} = {};
    for(let num of nums){
        dict[num] = dict[num] ? dict[num] + 1 : 1;
    }
    return Object.values(dict).includes(2)
}


let containsDuplicateTest1: number[] = [1,2,3,1]; //true
let containsDuplicateTest2: number[] = [1,2,3,4]; // false
let containsDuplicateTest3: number[] = [1,1,1,3,3,4,3,2,4,2]; // true
let containsDuplicateTest4: number[] = [3, 4, 5, 12, 8, 9, 10, 7, 7, 4] // true

console.log(containsDuplicate(containsDuplicateTest4));