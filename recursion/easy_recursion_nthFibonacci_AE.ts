
/**
 * easy - algo expert / neet150 - recursion - nth fibonacci
 * @description
 * leet_code: https://leetcode.com/problems/fibonacci-number
 * @summary
 * @param n 
 * @returns 
 */
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
getNthFibIterative(6)

/** Recusive, memoization method... */
type cache = {[key: number]: number}
function getNthFibRecursive(n: number, memoize: cache = {0:0, 1: 1}) {

    if(n in memoize){
        // console.log(memoize[n])
        return memoize[n]
    }else{
        memoize[n] = getNthFibRecursive(n-1, memoize) + getNthFibRecursive(n-2, memoize)
        // console.log(memoize[n])
        return memoize[n]
    }
}

getNthFibRecursive(6)




