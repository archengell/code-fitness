/**
 *
 * @param array
 * @returns
 */
function maxNonContiguousSubSet(array) {
    let oneIdxAway = 0;
    let twoIdxAway = 0;
    let current = 0;
    if (!array.length)
        return 0;
    if (array.length === 1)
        return array[0];
    twoIdxAway = array[0];
    oneIdxAway = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
        current = Math.max(oneIdxAway, twoIdxAway + array[i]);
        twoIdxAway = oneIdxAway;
        oneIdxAway = current;
    }
    return oneIdxAway;
}
let maxSubsetSumNoAdjacentTest1 = [75, 105, 120, 75, 90, 135];
let maxSubsetSumNoAdjacentTest2 = [];
let maxSubsetSumNoAdjacentTest3 = [17];
let maxSubsetSumNoAdjacentTest4 = [1, 2];
let maxSubsetSumNoAdjacentTest7 = [7, 10, 12, 7, 9, 14];
let maxSubsetSumNoAdjacentTest10 = [10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15];
let maxSubsetSumNoAdjacentTest13 = [30, 25, 50, 55, 100, 120];
let maxSubsetSumNoAdjacentTest14 = [7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4];
console.log(maxNonContiguousSubSet(maxSubsetSumNoAdjacentTest2));
