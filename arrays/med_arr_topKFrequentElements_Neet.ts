import * as utils from '../utils'

/**
 * @name medium - array - Neet/Leet - top K-Frequent Elements
 * @description
 * Given an interger array [nums] and an integer, K, return 
 * the K most frequent elements.  You may return the answer
 * in any order. 
 * @example 
 * @summary
 * time => O(n) space: O(n)
 * @param nums 
 * @param k 
 * @returns 
 */
function topKFrequent(nums: number[], k: number): number[] {

    if(!k){
        console.error('K needs to be > 0')
        return
    } 

    let cache: {[key:number]: number} = {}
    let res: number[] = [];
    /**
     * DO NOT USE  = new Array(x).fill([]) b/c each [] is a copy
     * and actions to one will be replicated to all others!
     * 
     * Also, need to use nums.length + 1:  the +1 is to handle
     * [x] use-cases to avoid undefined exception
     */
    let freq = Array.from(Array(nums.length+1), () => [])

    // time -> On space -> On
    for(let num of nums){
        cache[num] = ++cache[num] || 1;
    }
    // console.log(cache)
    for(let [num, count] of Object.entries(cache)){
        freq[count].push(parseInt(num))
    }
    console.log(freq)

    for(let idx = nums.length; idx > 0; idx--){
        for(let elem of freq[idx]){
            res.push(elem)
            if(res.length === k) return res
        }
    }
    /** !! Code below didn't work on last test-case w/ very large input
     * Eventually look into why, and the difference btwn the successful
     * attempt above!
     */
    // for(let idx = nums.length; idx > 0; idx--){
    //     if(res.length === k) return res
    //     if(idx in Object.keys(freq)){
    //         res.push(...freq[idx])
    //     }
    // }
    return res
};

interface IkFreqElems {
    'numArr': number[],
    'k': number
}

let kFreElemsTest1: IkFreqElems = {
    'numArr': [1,1,1,2,2,3,3,3,3,3],
    'k': 2
}// [3,1]
let kFreElemsTest2: IkFreqElems = {
    'numArr': [1],
    'k': 1
}// [1]
let kFreElemsTest3: IkFreqElems = {
    'numArr': [1,2],
    'k': 2
}// [1,2]
let kFreElemsTest4: IkFreqElems = {
    'numArr': [4,1,-1,2,-1,2,3],
    'k': 0
}// [-1,2]


let {numArr, k} = kFreElemsTest4;

utils.timed('res', topKFrequent, [numArr, k])
