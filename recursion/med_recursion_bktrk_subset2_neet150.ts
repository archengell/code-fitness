import * as utils from '../utils'

/**
 * medium - neet150 - subset II 
 * @description
 * Given an array of integers [nums] that MAY CONTAIN DUPLICATES, 
 * return all possible subsets ( the power set). 
 * 
 * !!! note: it may contain duplicates which is why !== subset problem !!!
 * @summary
 * - sort arr
 * - set up bktrk/dfs recursion 
 * - incorporate while loop to skip duplicates
 * @param nums 
 */
// o(n*2^n) time & space
function subsetsWithDup(nums: number[]): number[][] {

    let res: number[][] = [];

    nums.sort((a: number, b: number) => a - b);

    let dfs = (idx: number, subset: number[]): void => {
        if(idx >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[idx]);
        dfs(idx + 1, subset);
        subset.pop();

        while(idx + 1 < nums.length && nums[idx] == nums[idx + 1]) ++idx

        dfs(idx + 1, subset);
    }

    dfs(0, []);
    console.log(res)
    return res
};

let subsetsWithDup1: number[] = [1,2,2];
let subsetsWithDup2: number[] = [4,4,4,1,4];


utils.timed(subsetsWithDup, [subsetsWithDup2])