import * as utils from '../utils'


/**
 * medium - neet150 / algo expert - recursion - subset / powerset
 * @description
 * Given an array (nums) of unique elements, return all possible
 * subsets (the power set) 
 * !!! the sln must NOT contain duplicates, and may be in any order !!!
 * !! this is the same as algo expert's powerset problem !!
 * 
 * Example: 
 * array = [1, 2, 3]
 * output" [ [], [1], [2], [3], [1,2], [1,3], [2,3] ]
 * 
 * @summary
 * @param nums 
 * @returns 
 */
// o(n*2^n) time | o(n) space
function subsets(nums: number[]): number[][] {

    let subsets: number[] = [];
    let res: number[][] = [];

    let dfs = (elem: number) => {

        if(elem >= nums.length){
            res.push([...subsets])
            return
        }

        // decision to include nums[i]
        subsets.push(nums[elem])
        dfs(elem + 1)

        // decision not to include nums[i]
        subsets.pop()
        dfs(elem + 1)
    }

    dfs(0)
    // console.log(res)
    return res

};

let subsets1: number[] = [1, 2, 3];

utils.timed(subsets, [subsets1])
