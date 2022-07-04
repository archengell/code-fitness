/*********************************************************/
/** TWO NUMBER SUM | EASY | ARRAY **/
/*******************************************************/

/**
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
 * Sample Input: 
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 * 
 * Sample Output: 
 * [-1, 11]
 *  
 */

// complexity: time - O(n) | space: O(1): SLOW 544 ms 25% faster
function twoNumSum(nums: number[], target: number){
    let diff:number;
    let idx: number;
    let res: number[] = []

    for(let i=0; i<nums.length; i++){
        diff = target - nums[i];
        idx = nums.findIndex(num => num == diff)
        if(idx > 0 && i != idx){
            res = [nums[i], nums[idx]]
            console.log(res)
            return res
        }
    }
    return res
}

function twoNumSum2(nums: number[], target: number){
    let obj: {[key:number]: number} = {}
    for(let i=0; i<nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            console.log([i, obj[nums[i]]])
            return [i, obj[nums[i]]]
        }
        obj[target-nums[i]] = i;
    }
    return []
}

let testCases: {[key: string] : number[] | number | object} = {
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

console.time()
twoNumSum2(testCases['test1']['array'], testCases['test1']['targetSum'])
console.timeEnd()