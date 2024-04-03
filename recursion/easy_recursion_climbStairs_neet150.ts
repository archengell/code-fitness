/**
 * @description
 * you are climbing a staircase. It takes [n] stes to reach the top.
 * Each time you can either climb 1 or 2 steps => maxStep = 2. In how many 
 * distinct ways can you climb to the top? 
 * 
 * Example 1
 * input, n = 2
 * output = 2
 * explanation: 
 * 1. 1 + 1 
 * 2. 2
 * 
 * Example 2
 * input, n = 3
 * output = 3
 * Explanation
 * 1. 1 + 1 + 1
 * 2. 1 + 2
 * 3. 2 + 1
 * 
 * @summary
 * @param n 
 * @returns 
 */
// time => o(n) | space => o(1)
 function climbStairs_dp_fibonacci(n: number): number {
    let temp: number;

    if( n === 1 ) return 1;

    let [one, two] = [1, 2];

    for(let i = 3; i <= n; i++){
        temp = one + two;
        one = two; 
        two = temp;
    }
    console.log(two)
    return two
}
// time => o(n) | space => o(n)
function climbStairs_dp(n: number): number {
    let temp: number;

    if( n === 1 ) return 1;

    let arr: number[] = [];
 
    arr[1] = 1; 
    arr[2] = 2;
    // how to start at index 1 bc you'll get a negative index 
    // in the first part of the arr[i] eqn... 
    for(let i = 3; i <= n+1; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    console.log(arr[n])
    return arr[n]
}
// time => o(n) | space => o(n)
function climbStairs_memoization(n: number): number {
    let cache: number[] = [];
    let _climbStairs = (idx: number, num: number, cache: number[]): number =>{
        if(idx > num) return 0;
        if(idx === num) return 1;
        if(cache[idx] > 0) return cache[idx]
        cache[idx] = _climbStairs(idx+1, num, cache) + 
            _climbStairs(idx+2, num, cache)   
        return cache[idx]
    }
    console.log(_climbStairs(0, n, cache))
    return _climbStairs(0, n, cache)
}
    
let climbingStr1: number = 2;
let climbingStr2: number = 3;


climbStairs_memoization(climbingStr2)
