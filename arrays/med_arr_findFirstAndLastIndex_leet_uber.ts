/**
 * LEET_UBER: FIRST FIRST AND LAST INDEX
 * 
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 */

type obj = {[key: string]: number | number[]}

// time: O(n) | space: O(1)
//brute-force method: there is a faster method using binary search
 function searchRange_brute(nums: number[], target: number): number[] {
    let res: number[] = [-1, -1]
    let sortedNums: number[] = nums.sort((a,b) => a-b);
    for(let j = 0; j < sortedNums.length; j++){
        if(sortedNums[j] == target){
            res[0] = j;
            break
        } 
    }
    for(let i = sortedNums.length-1; i>=0; i--){
        if(sortedNums[i] == target) {
            res[1] = i;
            break
        } 
    }
    // console.log(res)
    return res
};

// time: O(logn) | space: O(1)
function searchRange_binSrch(nums: number[], target: number): number[] {
    let lwrBound: number;
    let upprBound: number;
    let res: number[] = [];
    let sortdArr: number[] = nums.sort((a,b) => a-b)
    
    lwrBound = findBound(sortdArr, target, true);
    if(lwrBound == -1) res = [-1, -1];

    upprBound = findBound(sortdArr, target, false);
    if(upprBound == -1) res = [-1, -1];

    res = [lwrBound, upprBound];
    // console.log(res)
    return res
};

function findBound(nums: number[], target: number, isFirst: boolean){
    let start: number = 0;
    let end: number = nums.length-1;
    while(start <= end){
        let mid: number = Math.floor((start + end) *0.5)
        if(nums[mid] == target){
            if(isFirst){
                if(mid == start || nums[mid-1] < target){
                    return mid;
                }
                end = mid - 1;
            }else{
                if(mid == end || nums[mid+1] > target){
                    return mid;
                }
                start = mid + 1;
            }
        }else if (nums[mid] > target){
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return -1
}


// let searchRangeTestMap: Map<number, number[]> = new Map(
//     [
//         [0, [1, 2, 3]],
//         [1, []]
//     ]
// )
// console.log(searchRangeTests.get(0))

let searchRangeTests: {[key: string]: {[key: string]: number | number[]}} = {
    'test1': {
        'nums': [5,7,7,8,8,10],
        'target': 8 // [3, 4]
    },
    'test2': {
        'nums': [5,7,7,8,8,10],
        'target': 6 // [-1, -1]
    },
    'test3': {
        'nums': [1],
        'target': 1 // [0, 0]
    },
    'test4': {
        'nums': [1, 4],
        'target': 4 // [1, 1]
    },
    'test5': {
        'nums': [1, 2, 2],
        'target': 2 // [1, 2]
    },

}

// could destructure...
let {nums, target} = searchRangeTests['test1']
   
searchRange_brute(searchRangeTests['test5']['nums'] as number[], searchRangeTests['test5']['target'] as number)
