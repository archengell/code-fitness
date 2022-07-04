

/**
 * LeetCode Top 100 Question - Easy - Single Number
 * @description Given a non-empty array of integers, every element
 * appears twice except for one. Find that single one. 
 * @summary time: O(n) | space: O(1) = b/c it's a hashmap!
 * @param nums 
 * @returns 
 */
function singleNumber(nums: number[]): number {
    let frequency: {[key:number]: number} = {};
    for(let num of nums){
        frequency[num] = frequency[num] ? frequency[num] + 1: 1; 
    }

    for(let num of nums){
        if(frequency[num] === 1) return num
    }
};

let singleNumTest1: number[] = [2,2,1];
let singleNumTest2: number[] = [4,1,2,1,2];
let singleNumTest3: number[] = [1];

console.log(singleNumber(singleNumTest1))