import * as utils from '../../utils'

/**
 * @name kSum hard/med - AE/Leet - Recursion/Two-Pointer
 * @access https://leetcode.com/problems/4sum
 * @description Write a function that takes in an non-empty array of distinct
 * integers and an integer representing a target sum. The function should 
 * return all of the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] 
 * such that: 
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct
 * arr[a] + arr[b] + arr[c] + arr[d] = target sum
 * *** this approach works with k-sum: 2, 3, 4, 5, ... 
 * @example 
 * Input: arr = [1,0,-1,0,-2,2], targetSum = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * @param {number[]} arr 
 * @param {number} targetSum 
 * @returns {number[][]} 
 * @summary 
 * time: o(n^(k-1) == n^3 for 4Sum) || space: o(n)
 */
function kSum(arr: number[], targetSum: number, k: number = 4): number[][] {

    let res: number[][] = [];
    let temp: number[][] = [];
    let cache = new Set<string>();

    arr.sort((a: number, b: number) => a - b);

    let _kSum = (arr: number[], targetSum: number, 
            start: number = 0, k: number) => {
        
        let res: number[][] = [];
        let cache = new Set<string>()
        // if we run out of numbers to add, return res
        if(start === arr.length) return res;

        /**
         * math edge case:
         * we cannot obtain a sum of target if the smallest value
         * in arr is greater than target/k or if the largest value
         * is smaller than target/k.
         */
        let mean: number = targetSum / k;
        if(arr[start] > mean ||  mean > arr[arr.length-1]) return res;
        
        if(k === 2) return _twoSum(arr, targetSum, start);

        for(let i = start; i < arr.length; i++) {
            if( i === start || arr[i - 1] !== arr[i]) {
                for(let subset of _kSum(arr, targetSum - arr[i], i + 1, k - 1)) {
                    res.push([arr[i]].concat(subset))
                }
            }
        }

        return res
    }

    let _twoSum = (arr: number[], targetSum: number, 
            start: number): number[][] => {

        let left:number = start;
        let right: number = arr.length - 1;
        let res: number[][] = []

        while(left < right && left != right){
            let sum: number = arr[left] + arr[right]
            if(sum === targetSum){
                res.push([arr[left], arr[right]])
                // to prevent duplicate combos
                ++left;
                --right;
            }
            // if sum is less than target & skip duplicate values*
            // *skipping identical values is custom to this problem
            else if(sum < targetSum || (left > start && 
                arr[left] === arr[left-1])) 
                ++left;
            // if sum is greater than target & skip duplicate values
            else if(sum > targetSum || (right < arr.length-1 && 
                arr[right] === arr[right+1])) 
                --right;
        }
        
        return res
    }
    
    temp = _kSum(arr, targetSum, 0, k)

    // remove duplicate subsets - temp workaround...
    for(let combo of temp){
        if(combo.length === 4){
            let key: string = combo.join('')
            if(!cache.has(key)) res.push(combo)
            cache.add(key)
        }
    }

    return res
}

let fourSumTest1 = {
    "array": [7, 6, 4, -1, 1, 2],
    "targetSum": 16
} // [ [ -1, 4, 6, 7 ], [ 1, 2, 6, 7 ] ]
let fourSumTest3 = {
    "array": [5, -5, -2, 2, 3, -3],
    "targetSum": 0
}
let fourSumTest5 = {
    "array": [-1, 22, 18, 4, 7, 11, 2, -5, -3],
    "targetSum": 30
}
let fourSumTest6 = {
    "array": [-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5],
    "targetSum": 20
}
let fourSumTest7 = {
    "array": [1, 2, 3, 4, 5],
    "targetSum": 100
}
let fourSumTest8 = {
    "array": [1, 2, 3, 4, 5, -5, 6, -6],
    "targetSum": 8
}
let fourSumTest9 = {
    "array": [-2,-1,-1,1,1,2,2],
    "targetSum": 0
} // [[-2,-1,1,2],[-1,-1,1,1]]
let fourSumTest10 = {
    "array": [-3,-2,-1,0,0,1,2,3],
    "targetSum": 0
}

// test this with examples of 5Sum or greater... 

let {array, targetSum} = fourSumTest10;

utils.timed('res', kSum, [array, targetSum, 4])