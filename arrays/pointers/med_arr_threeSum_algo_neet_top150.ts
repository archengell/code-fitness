
import * as utils from '../../utils'

interface IThreeSumInput {
    'threeSumArr': number[],
    'targetSum': number
}

/**
 * medium - array_pointer - algoExpert/Neet - three sum
 * @description
 * Given an integer array nums, return all the triplets
 * [ nums[i], nums[j], nums[k]] such that i != j, j != k,
 * k != i, and nums[i] + nums[j] + nums[k] === 0.
 * 
 * *** SLN set must not contain duplicate triplets! ***
 * @summary
 * 1. sort, then iterate thru array
 * 2. set up while-loop pointer each end simm twoSum2 (sliding window)
 * 3. push() 3-num array to res[][] when cond. met
 * @param nums 
 * @returns 
 * @raises
 */
// o(n2) time | o(n) space -> 3.43 ms
function threeSum(nums: number[], targetSum: number = 0): number[][] {

    let res: number[][] = [];
    let sum: number;
    let key: string;
    let cache = new Map<string, number>();
    nums.sort((a: number, b: number) => a - b);

    for(let [idx, elem] of nums.entries()){ // or for(let idx=0;idx<nums.length;idx++)

        let left: number = idx + 1
        let right: number = nums.length - 1

            while(left >= 0 && right < nums.length && left < right && 
                left !== right){
                    
                    sum = nums[idx] + nums[left] + nums[right];
                    // console.log(`idx: ${idx} L: ${left} R: ${right}`)
                    if(sum < targetSum){
                        ++left;
                    }else if(sum > targetSum){
                        --right;
                    }else{
                        key = `${nums[idx]}${nums[left]}${nums[right]}`
                        if(!cache.has(key)){
                            res.push([nums[idx], nums[left], nums[right]])
                            cache.set(key, 0);
                            // console.log(key)
                            --right;
                        }else{
                            --right;
                        }
                    }
             }
    }
    console.log(res)
    return res
}

// o(n3) time | o(n) space
function threeSum_brute_On3(arr: number[], target: number): number[][] {

    let res: number[][] = [];
    let sum: number
    //three for loops 
    // interesting need to look into why there is three values when there should be two.
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = i; j < arr.length - 1; j++){
            for(let k = j; k < arr.length; k++){
                sum = arr[i] + arr[j] + arr[k]
                if(sum === target && (i !== j && j !== k && k !== i)) res.push([arr[i], arr[j], arr[k]])
            }
        }
    }
    console.log(res)
    return res
}

let threeSumTest1: IThreeSumInput = {
    "threeSumArr": [-1,0,1,2,-1,-4],
    "targetSum": 0
}//[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
let threeSumTest2: number[] = []; //[]
let threeSumTest3: number[] = [0];
let threeSumTest4: number[] = [0, 0, 0, 0];
let threeSumTest5: number[] = [12, 3, 1, 2, -6, 5, -8, 6]

let threeSumTest6: IThreeSumInput = {
    "threeSumArr": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
    "targetSum": 0
}//[[ -8, 2, 6 ],[ -8, 3, 5 ],[ -6, 0, 6 ],[ -6, 1, 5 ],[ -1, 0, 1 ]]
let threeSumTest8: IThreeSumInput = {
    "threeSumArr": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    "targetSum": 18
}//[[1, 2, 15],[1, 8, 9],[2, 7, 9],[3, 6, 9],[3, 7, 8],[4, 5, 9],[4, 6, 8],[5, 6, 7]]
let threeSumTest9: IThreeSumInput = {
    "threeSumArr": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    "targetSum": 32
}// [ [ 8, 9, 15 ] ]
let threeSumTest10: IThreeSumInput = {
    "threeSumArr": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    "targetSum": 33
}//[]
let threeSumTest11: IThreeSumInput = {
    "threeSumArr": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    "targetSum": 5
}//[]

let {threeSumArr, targetSum} = threeSumTest1;

utils.timed(threeSum_brute_On3, [threeSumArr, targetSum])