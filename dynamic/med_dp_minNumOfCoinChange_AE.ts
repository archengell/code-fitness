import * as utils from '../utils'

/**
 * medium - DP - algo expert - min. num of coin change
 * @description
 * Given an array of positive integers representing coin denominations and a 
 * single postive integer as target amount of money.  Write a function that 
 * returns the smallest number of coins needed to make change for (to sum up to)
 * that target amount usnig the given coin denominations.
 * @summary
 * @param target 
 * @param coins 
 * @returns 
 */
// o(n x m) time | o(n) space => n = target + 1; m = coins.length
 function coinChange(coins: number[], target: number): number { 

    let res: number;
    let numOfCoins: number[] = new Array(target + 1).fill(target + 1)

    numOfCoins[0] = 0

    for(let idx = 1; idx < numOfCoins.length; idx++){
        for(let coin of coins){
            if(idx - coin >= 0){
                numOfCoins[idx] = Math.min(numOfCoins[idx], 1 + numOfCoins[idx-coin])
            }
        }
    }
    console.log(numOfCoins) // [ 0, 1, 1, 2, 1, 2, 2 ]
    res = numOfCoins[target] === target + 1 ? -1 : numOfCoins.pop() ;
    console.log(res) // 2
    return res
 }


// output: 3 => [ [1,1,1,1,1,1,1], [1,1,5]]
let minCoinChange1: any = {
    'coins': [1, 5, 10],
    'amount': 7
}
let minCoinChange2: any = {
    'coins': [10, 1, 5],
    'amount': 7
}
let minCoinChange4: any = {
    'coins': [1, 2, 3],
    'amount': 0
}
let minCoinChange5: any = {
    'coins': [2, 1],
    'amount': 3
}
let minCoinChange9: any = {
    'coins': [1, 5, 10],
    'amount': 24
}
let minCoinChange11: any = {
    'coins': [2, 4],
    'amount': 7
}
let minCoinChange13: any = {
    'coins': [3, 5],
    'amount': 9
}
let minCoinChange14: any = {
    'coins': [1, 2, 4],
    'amount': 6
}

let {coins, amount} = minCoinChange14;

utils.timed(coinChange, [coins, amount])