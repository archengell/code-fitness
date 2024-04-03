
/**
 * @description
 * @summary
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]): number {
    let min:number = Infinity;
    let res: number = 0;

    for(let i=0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        res = Math.max(res, prices[i] - min)
    }
    
    return res
};

let maxProfitTest1: number[] = [7,1,5,3,6,4];
let maxProfitTest2: number[] = [7,6,4,3,1];
let maxProfitTest3: number[] = [3,2,1];
let maxProfitTest4: number[] = [2,1,3];
let maxProfitTest5: number[] = [5,10,5,10];

console.log(maxProfit(maxProfitTest5))