

/**
 * medium - leet/neet - array - Max Product Subarray
 * @description
 * Given an integer array, tind a contiguous non-empty
 * subarray witin the array tat has the largest product
 * and return the product
 * subarray = a contiguous subsequence of the array
 * @summary
 * 
 * @param nums 
 * @returns 
 */
function maxProduct(nums: number[]): number {

    let currMin: number = 1;
    let currMax: number = 1;
    let res: number = Math.max(...nums) 
    let temp: number;

    for(let num of nums){
        temp = currMax * num; // store max before it changes
        currMax = Math.max(currMax * num, currMin * num, num)
        currMin = Math.min(temp, currMin * num, num)
        res = Math.max(res, currMax)
    }
    return res
};

let maxProductTest1: number[] = [2, 3, -2, 4] // 6
let maxProductTest2: number[] = [1, -2, -3, -4] // 12
let maxProductTest3: number[] = [-1, -2, -3, 4] // 24
let maxProductTest4: number[] = [-2, 0, -1] // 0
let maxProductTest5: number[] = [2, -5, 3, 1, -4, 0, -10, 2, 8] // 

console.log(maxProduct(maxProductTest4))