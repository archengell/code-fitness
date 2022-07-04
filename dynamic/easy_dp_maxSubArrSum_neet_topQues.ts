


/**
 * @description Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * @summary 
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * @param nums 
 * @returns 
 */

// o(n2) time | o(1) space
// least efficient, and wouldn't work under leetcode time limit
// ok first pass during interview... 1.849 ms
function maxSubArr_brute_On2(nums: number[]): number {
    let maxSubArr: number = -Infinity;
    let currSubArr: number;
    
    for(let i = 0; i < nums.length; i++){
        currSubArr = 0 
        for(let j = i; j < nums.length; j++){
            currSubArr += nums[j]
            maxSubArr = Math.max(maxSubArr, currSubArr)
        }
    }
    return maxSubArr

};

// o(n) time | o(1) space
// optimal solution for interview... 0.268 ms
function maxSubArr_dp_On(nums: number[]): number {
    let maxSubArr: number = -Infinity;
    let currSubArr: number = -Infinity;

    for(let num of nums){
        currSubArr = Math.max(num, currSubArr + num)
        maxSubArr = Math.max(maxSubArr, currSubArr)
    }

    return maxSubArr
}


let maxSubArrTest1: number[] = [-2,1,-3,4,-1,2,1,-5,4];
let maxSubArrTest2: number[] = [1];
let maxSubArrTest3: number[] = [5,4,-1,7,8];

console.time()
console.log(maxSubArr_brute_On2(maxSubArrTest3));
console.timeEnd()

console.time()
console.log(maxSubArr_dp_On(maxSubArrTest3))
console.timeEnd()
