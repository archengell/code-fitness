/**
 * 
 * @param array 
 * @returns 
 */
function maxNonContiguousSubSet(array: number[]) {
    
    let oneIdxAway: number = 0;
    let twoIdxAway: number = 0;
    let current: number = 0;

    if(!array.length) return 0
    if(array.length === 1 ) return array[0]

    twoIdxAway = array[0]
    oneIdxAway = Math.max(array[0], array[1])

    for(let i = 2; i < array.length; i++){
        current = Math.max(oneIdxAway, twoIdxAway + array[i])
        twoIdxAway = oneIdxAway
        oneIdxAway = current
    }
    return oneIdxAway;
}

let maxSubsetSumNoAdjacentTest1: number[] = [75, 105, 120, 75, 90, 135];
let maxSubsetSumNoAdjacentTest2: number[] = [];
let maxSubsetSumNoAdjacentTest3: number[] = [17];
let maxSubsetSumNoAdjacentTest4: number[] = [1, 2];
let maxSubsetSumNoAdjacentTest7: number[] = [7, 10, 12, 7, 9, 14];
let maxSubsetSumNoAdjacentTest10: number[] = [10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15];
let maxSubsetSumNoAdjacentTest13: number[] = [30, 25, 50, 55, 100, 120];
let maxSubsetSumNoAdjacentTest14: number[] = [7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4];

console.log(maxNonContiguousSubSet(
    maxSubsetSumNoAdjacentTest2
))