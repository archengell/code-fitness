// interface ISmallDiff {
//     'arrayOne': number[],
//     'arrayTwo': number[]
// }

/**
 * @twoPointer
 * @name SmallestDifference medium - arrays - algoExpert
 * @description
 * Write a function that takes in two non-empty arrays of integers,
 * finds the pair of numbers ( one from each array ) whose absolute
 * difference is closest to zero, and returns an array containing
 * theres two numbers, with the number from the first array in the
 * first position.
 *
 * Note that the absolute difference of two integers is the distance
 * between them on the real number line. For example, the absolute
 * difference of -5 and 5 is 10, and the absolute difference of -5
 * and -4 is 1.
 * @summary
 * @param arrayOne
 * @param arrayTwo
 * @returns
 */
// o(n2) time | o(n) space
function smallestDiff_brute(arrayOne: number[], arrayTwo: number[]) {
    let res: number = Infinity;
    let store = new Map<number, number[]>();
    let diff: number = 0;

    for(let i = 0; i < arrayOne.length; i++){
        for(let j = 0; j < arrayTwo.length; j++){
            diff = Math.abs(arrayOne[i] - arrayTwo[j])
            res = Math.min(diff, res)
            store.set(diff, [arrayOne[i], arrayTwo[j]])
        }
    }
    return store.get(res);
}

/**
 * step 1:
 * sort both arrays -> log(n) + log(m)
 * smallest = current = infinity
 * pointer approach -> while(idx1 < arr1.length && idx2 < arr2.length)
 * { if arrOneNum[idx1] < arrTwoNum[idx2]
 * current = math.abs(arrOneNum[idx1] - arrTwoNum[idx2])
 * ++idx1
 * else if  arrOne[idx1] > arrTwoNum[idx2]
 * current = math.abs(arrOneNum[idx1] - arrTwoNum[idx2])
 * ++idx2
 * else
 * return [arrOne[idx1], arrTwoNum[idx2]]
 * if(smallest > current)
 * smallest = current
 * res = [arrOne[idx1], arrTwoNum[idx2]]
 * return res
 */
// O(nlogn + mlogm)
function smallestDiff_opt(arrayOne: number[], arrayTwo: number[]) : number[] {
    let smallest: number = Infinity;
    let current: number = Infinity;
    let idx1: number = 0;
    let idx2: number = 0;
    let firstNum: number = -Infinity; // must use to work for all SLNs
    let secondNum: number = -Infinity; // must use to work for all SLNs
    let res: number[] = [];

    arrayOne.sort((a: number, b: number) => a - b);
    arrayTwo.sort((a: number, b: number) => a - b);
    /**
     * This is very interesting that the following code only works
     * with all the AlgoExpert Slns when there is a block-scoped assignment
     * to a variable.
     */
    while(idx1 < arrayOne.length && idx2 < arrayTwo.length){

        firstNum = arrayOne[idx1];
        secondNum = arrayTwo[idx2];

        if(firstNum < secondNum){
            current = firstNum - secondNum
            ++idx1
        }else if(firstNum > secondNum){
            current = secondNum - firstNum
            ++idx2
        }else{
            return [firstNum, secondNum]
        }

        if(smallest > current){
            smallest = current;
            res = [firstNum, secondNum]
        }

    }
    return res
  }


// [28, 26]
let smallDiffTest1: ISmallDiff = {
    "arrayOne": [-1, 5, 10, 20, 28, 3],
    "arrayTwo": [26, 134, 135, 15, 17]
}
// [25, 1005]
let smallDiffTest3: ISmallDiff = {
    "arrayOne": [10, 0, 20, 25],
    "arrayTwo": [1005, 1006, 1014, 1032, 1031]
}
// [2000, 1032]
let smallDiffTest5: ISmallDiff = {
    "arrayOne": [10, 0, 20, 25, 2000],
    "arrayTwo": [1005, 1006, 1014, 1032, 1031]
}// [20, 21]
let smallDiffTest7: ISmallDiff = {
    "arrayOne": [0, 20],
    "arrayTwo": [21, -2]
}
 // [-123, -124]
let smallDiffTest9: ISmallDiff = {
    "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
    "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
}

let {arrayOne, arrayTwo} = smallDiffTest9;

console.time()
console.log(smallestDiff_brute(arrayOne, arrayTwo));
console.timeEnd()
console.time()
console.log(smallestDiff_opt(arrayOne, arrayTwo));
console.timeEnd()


/**
 * BELOW VERSION DOES NOT WORK!
 * some reason this code didn't work I needed to
 * place arrayOne[idx1] & arrayTwo[idx2] into
 * variables.  Also, the order of which current
 * is derived, matters!
 *
if(arrayOne[idx1] < arrayTwo[idx2]){
    current = arrayOne[idx1] - arrayTwo[idx2]
    ++idx1
}else if(arrayOne[idx1] > arrayTwo[idx2]){
    current = arrayTwo[idx2] - arrayOne[idx1]
    ++idx2
}else{
    return [arrayOne[idx1], arrayTwo[idx2]]
}
if(smallest > current){
    smallest = current
    res = [arrayOne[idx1], arrayTwo[idx2]]
}
 */
