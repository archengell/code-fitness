
import * as utils from '../utils'

/**
 * easy - algo expert / neet150 - recursion - nth fibonacci
 * @description
 * leet_code: https://leetcode.com/problems/fibonacci-number
 * @summary
 * @param n 
 * @returns {number[]} array of all the fibonacci results up to input
 */
//time: On | space: o1 ==> **best sln
function getNthFibIterative_v1(n: number): number[] {

    let count: number = 0;
    let temp: number;
    let res: number[] = [];
    let num1: number = 0;
    let num2: number = 1;

    while(count < n){
        // set the init_values into res 
        if(count === 0) res.push(0);
        if(count === 1) res.push(1);
        // main logic to switch out with latest calc
        temp = num1 + num2;  
        num1 = num2;
        num2 = temp;
        // add sum calc to res
        res.push(num2);
        // increment count to break loop
        ++count;
    }
    return res
}


function getNthFibIterative(n: number) {
    var count: number = 0;
    var tempArr: number[] = [];
    let sum: number;

    if (count == 0) tempArr[count] = 0;    

    while(count >= 0 && count < n){
        if (count == 1) tempArr[count] = 1;
        if(count > 1) {
            sum = tempArr[count-1] + tempArr[count-2]
            tempArr[count] = sum
        }
        count++
        // getNthFib(++count)
    }
    console.log('tempArr', tempArr)
    console.log('res', tempArr[n-1])
	return tempArr[n-1];
}

/** 
 * recursive w/o memoization, outputs a number[]
 * O(n) time & space
 */
function getNthFibRecursiveToNumArr(n: number): number[] {
    let res: number[] = [0,1];
    for(let i = 2; i < n+2; i++){
      res[i] = res[i-1] + res[i-2]
    }
    return res
} // n=6 : [ 0,1,1,2,3,5,8,13]


function getNthFibRecursive(n: number): number {
    // *** written as 1-indexed array!***
    // base cases
    if(n === 2){
        return 1;
    } else if( n === 1) {
        return 0;
    } else {
        return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2);
    }
    
}

/** Recusive, memoization method... */
type cache = {[key: number]: number}
function getNthFibRecursive_Memo(n: number, memoize: cache = {0:0, 1: 1}): number {

    if(n in memoize){
        console.log(memoize[n])
        return memoize[n]
    }else{
        memoize[n] = getNthFibRecursive_Memo(n-1, memoize) + 
        getNthFibRecursive_Memo(n-2, memoize)
        console.log(memoize[n])
        return memoize[n]
    }
}

utils.timed('res', getNthFibRecursive, [6])




