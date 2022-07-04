
/*********************************************************/
/** TWO NUMBER SUM | EASY | ARRAY  ( LEET_UBER )**/
/*******************************************************/

/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
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
function twoNumSum_fastest(nums: number[], target: number){
    let map: {[key:number]: number} = {}
    for(let i=0; i<nums.length; i++){
        //.hasOwnProperty() 
        if(map.hasOwnProperty(nums[i])){
            return [i, map[nums[i]]]
        }
        map[target-nums[i]] = i
    }
}
// time: O(n) | space O(1) : fast using map in lieu of object...
function twoNumSum_fastest1(nums: number[], target: number){

    let map = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++){
        let diff: number = target - nums[i];
        if(map.has(nums[i])) return [map.get(nums[i]), i]
        map.set(diff, i)
    }
}