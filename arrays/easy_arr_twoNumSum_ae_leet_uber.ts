import * as utils from '../utils'

/**
 * @name easy - array - two num sum - algoexpert, leetcode
 * @access https://leetcode.com/problems/two-sum/
 * @description
 * Write a function that takes in an non-empty array of distint integers
 * and an integer that represents a target sum.  If any two numbers in the
 * input array sum up to the target sum, the function should return the numbers
 * in an array in any order.  If no two numbers sum up to the target sum, 
 * the function should return an empty array. 
 * 
 * Note: the target sum has to be obtained by summing two different integers
 * in the array: you can't add a single integer to itself in order to obtain
 * the target sum.  
 * 
 * Note: you can add the same number twice as long as they're different indices.
 * 
 *  
 *
 * @example
 * Sample Input: 
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 * 
 * Sample Output: 
 * [-1, 11]
 * @param nums 
 * @param target 
 * @returns numbers[] with two integers that much the criteria.
 */

// time: O(n) | space O(1) : 544 ms 
function twoNumSum_slow(nums: number[], target: number){
    let diff:number;
    let idx: number;
    let res: number[] = []

    for(let i=0; i<nums.length; i++){
        diff = target - nums[i];
        idx = nums.findIndex(num => num == diff)
        if(idx > 0 && i != idx){
            res = [i, idx]
            console.log(res)
            return res
        }
    }
    return res
}

// time: O(n) | space O(1) : 188 ms 
 function twoNumSum_fast(nums: number[], target: number){
    let idx = 0
    for(let i = 0; i < nums.length; i++) {
        idx = nums.indexOf(target - nums[i])  
        if(nums[idx] + nums[i] === target && i !== idx) return [idx, i]
    }
   }; 


// time: O(n) | space O(1) : fastest!! 69 ms 94.5% faster
function twoNumSum_fastest_obj(nums: number[], target: number){
    let map: {[key:number]: number} = {}
    for(let i=0; i<nums.length; i++){
        if(map.hasOwnProperty(nums[i])){
            return [i, map[nums[i]]]
        }
        map[target-nums[i]] = i
    }
}
// time: O(n) | space O(1) : fast using map in lieu of object...
function twoNumSum_fastest_map(nums: number[], target: number){

    let map = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++){
        let diff: number = target - nums[i];
        if(map.has(nums[i])){
            console.log([map.get(nums[i]), i])
            return [map.get(nums[i]), i]
        } 
        map.set(diff, i)
    }
}
interface ItwoNumSumInputs {
    'array': number[],
    'targetSum': number
} 

// interface above fixed the error of being too generic by using
// number | number[] | object in the value location!
let testCases: {[key: string] : ItwoNumSumInputs } = {
    'test1': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    },
    'test2': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    },
    'test3': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    },
    'test4': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    },
    'test5': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    },
    'test6': {
        'array': [3, 5, -4, 8, 11, 1, -1, 6],
        'targetSum': 10
    }
}

let { array, targetSum } = testCases['test6']

utils.timed(twoNumSum_fastest_map, [array, targetSum])