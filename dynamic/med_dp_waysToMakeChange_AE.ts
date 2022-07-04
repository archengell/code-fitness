import * as utils from '../utils'

// O(n*d) time | O(d) space ---> 0.195 ms
// n = input, 
// d = # of coin combinations 
function waysToMakeChange(amount: number, coins: number[]): number{

    let change: number[][] = [];
    let coin: number[] = [];
    let res: number;

    let dfs = (idx: number, coin: number[], total: number) =>{

        // base case 1
        if(total === amount){
            change.push([...coin]);
            return
        }
        // base case 2
        if(idx >= coins.length || total > amount) return

        // add next coin into change combo
        coin.push(coins[idx])
        dfs(idx, coin, total + coins[idx])

        // do not add next coin
        coin.pop()
        dfs(idx + 1, coin, total)

    }

    dfs(0, coin, 0);

    res = (change.length) || 0
    // console.log(res)
    return res
}
// O(n*d) time | O(n) space ---> 0.081 ms 2x FASTER!!
function waysToMakeChange_AE_Sln1(amount: number, coins: number[]) {
    let ways: number[] = new Array(amount+1).fill(0);
    ways[0] = 1;
    for(let coin of coins){ // [1, 5, 10, 25]
        for(let idx: number = 1; idx < amount + 1; idx++){
            if(coin <= idx){
                ways[idx] += ways[idx - coin]
                //ways[0] = 1
                //ways[1] += ( ways[1] = 0 + ways[1-1] = ways[0] = 1 ) => 1
                //ways[2] += ( ways[2] = 0 + ways[2-1] = ways[1] = 1 ) => 1
                //ways[3] += ( ways[3] = 0 + ways[3-1] = ways[2] = 1 ) => 1 
                //ways[4] += ( ways[4] = 0 + ways[4-1] = ways[3] = 1 ) => 1
                // ... continues to populate up to ways[6] w/ 1, then next 
                // iteration (5), produces the following:
                //ways[5] += ( ways[5] = 1 + ways[5-5] = ways[0] = 1 ) => 2
                //ways[6] += ( ways[6] = 1 + ways[6-1] = ways[1] = 1 ) => 2 
            }
        }
    }
    console.log(ways[amount]) // [1, 1, 1, 1, 2, 2]
    return ways[amount]
}

let waysToMakeChange2: any = {
    'amount': 0,
    'coins': [2, 3, 4, 7]
}
let waysToMakeChange1: any = {
    'amount': 6,
    'coins': [1, 5]
}
let waysToMakeChange3: any = {
    'amount': 9,
    'coins': [5]
}
let waysToMakeChange4: any = {
    'amount': 7,
    'coins': [2, 4]
}
let waysToMakeChange6: any = {
    'amount': 5,
    'coins': [1, 5, 10, 25]
}
let waysToMakeChange7: any = {
    'amount': 10,
    'coins': [1, 5, 10, 25]
} 
let waysToMakeChange8: any = {
    'amount': 25,
    'coins': [1, 5, 10, 25]
}
let waysToMakeChange10: any = {
    'amount': 7,
    'coins': [2, 3, 4, 7]
}

let { amount, coins } = waysToMakeChange8

utils.timed(waysToMakeChange, [amount, coins])
utils.timed(waysToMakeChange_AE_Sln1, [amount, coins])