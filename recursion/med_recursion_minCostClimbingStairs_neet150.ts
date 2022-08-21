
import { timed } from '../utils'

/**
 * @description
 * You are given an integer array cost where cost[i] is the cost of ith step
 * on a staircase.  Once you pay the cost, you can either climb one or two steps. 
 * 
 * You can either start from the step with idx = 0 or 1. 
 *  
 * leet_code_link: https://leetcode.com/problems/min-cost-climbing-stairs/
 * 
 * Example 1:
 * input: cost = [10, 15, 20] 
 * output: 15
 * explanation: you will start at idx = 1, pay 15, then climb two steps to 
 * to reach the top.  Total cost = 15. 
 * 
 * Example 2: 
 * input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * output: 6
 * explanation:
 *  - Pay 1 and climb two steps to reach index 2.
 *  - Pay 1 and climb two steps to reach index 4.
 *  - Pay 1 and climb two steps to reach index 6.
 *  - Pay 1 and climb one step to reach index 7.
 *  - Pay 1 and climb two steps to reach index 9.
 *  - Pay 1 and climb one step to reach the top. 
 * @summary
 * 
 * @param cost 
 * @returns {number} : the minimum cost to reach the top of the floor.
 */
// time => o(n) | space => o(1) **much closer to climbing stairs!
// BUT! not as fast as opt2! => 2.171 ms
function minCostClimbingStairs_opt1(cost: number[]): number {

    let temp: number;
    let downOne: number = 0;
    let downTwo: number = 0;

    for(let idx = 2; idx < cost.length + 1; idx++){
        temp = downOne;
        downOne = Math.min(downOne + cost[idx - 1], downTwo + cost[idx - 2]);
        downTwo = temp;
    }
    console.log(downOne)
    return downOne
};
// time => o(n) | space => o(1) => 1.869 ms
function minCostClimbingStairs_opt2(cost: number[]): number {

    cost.push(0);
    for(let idx = cost.length - 3; idx >= 0; idx--){
        cost[idx] += Math.min(cost[idx + 1], cost[idx + 2])
    }
    console.log(Math.min(cost[0], cost[1]))
    return Math.min(cost[0], cost[1])
};

// o(n) time & space => 1.978 ms
function minCostClimbingStairs_top_down_memo(cost: number[]): number {

    let memo = new Map<number, number>()

    let minCost = (num: number, cost: number[] = []): number => {
        if(num <= 1) return 0;
        if(memo.has(num)) return memo.get(num)
    

        let downOne: number = cost[num - 1] + minCost(num - 1, cost);
        let downTwo: number = cost[num - 2] + minCost(num - 2, cost);

        memo.set(num , Math.min(downOne, downTwo))

        return memo.get(num)
    }
    console.log(minCost(cost.length, cost))
    return minCost(cost.length, cost)
}
let minCostClimbingStairs1: number[] = [10, 15, 20];
let minCostClimbingStairs2: number[] = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

// console.time()
// minCostClimbingStairs_opt1(minCostClimbingStairs2)
// console.timeEnd()

timed('res', minCostClimbingStairs_opt1, [minCostClimbingStairs2])

