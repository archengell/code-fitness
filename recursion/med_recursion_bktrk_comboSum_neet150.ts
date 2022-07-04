import * as utils from '../utils'


/**
 * medium - neet150 - recursion/backtrack/dp - combination sum 
 * @description
 * Given an array of distinct integers [candidates] and a target integer target,
 * return a list of all combinations of candidates wheret he chosen numbers sum
 * to target.  You may return the combination in any order. 
 * 
 * The same number may be chosen from candidates an unlimited # of times.  Two
 * combinations are unique if the frequency of at least one of the chosen numbers
 * is different. 
 * 
 * Ex 1: candidates = [2,3,6,7], target = 7 => output: [[2,2,3], [7]]
 * Ex 2: candidates = [2,3,5], target = 8 ===> output: [[2,2,2,2], [2,3,3], [3,5]]
 * Ex 3: candidates = [2], target = 1 =======> output: []  
 * @summary
 *  - use backtrack algo as DFS tree traversal.
 * @param candidates 
 * @param target 
 * @returns 
 */

// O(N^(t/m)) time | O(t/m) space ==> t = target, m = min # of combos
function combinationSum(candidates: number[], target: number): number[][] {

    let combos: number[][] = [];

    let _backtrackByDFS = (idx: number, combo: number[], sum: number): void =>{

        //base case #1:
        if(sum === target){
            combos.push([...combo])
            return
        }
        //base case #2: 
        if(idx >= candidates.length || sum > target) return
        
        combo.push(candidates[idx])
        _backtrackByDFS(idx, combo, sum + candidates[idx])

        // remove candidate to go down other decision
        combo.pop()         
        // idx + 1 indicates that we can't include any instances of idx
        _backtrackByDFS(idx + 1, combo, sum)
    }

    _backtrackByDFS(0, [], 0)
    console.log(combos)
    return combos
};

let combinationSum1: any = {
    'candidates': [2,3,6,7],
    'target': 7
}

let combinationSum2: any = {
    'candidates': [2,3,5],
    'target': 8
}

let { candidates, target } = combinationSum2

utils.timed(combinationSum, [candidates, target])