import * as utils from '../../utils';

/**
 * @description
 * @summary
 * @param prices
 * @returns
 */
function maxProfit(prices: number[]): number {
	let min: number = Infinity;
	let res: number = 0;

	for (let i = 0; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		res = Math.max(res, prices[i] - min);
		console.log(min, prices[i], res);
	}
	return res;
}

type maxProfitResult = {
	maxProfit: number;
	dayToBuy?: number;
	dayToSell?: number;
};
/**
 * @ref https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @description
 * You are given an array prices where prices[i] is the price of a
 * given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy
 * one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 * @param prices
 * @summary
 * time: On
 * space: O1
 * @returns
 */
function maxProfit2(prices: number[]): maxProfitResult {
	let min = Infinity;
	let max = 0;
	let cache = new Map<number, number>();

	for (let i = 0; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		cache.set(min, i);
		max = Math.max(max, prices[i] - min);
		cache.set(max, i);
	}
	return {
		maxProfit: max,
		dayToBuy: cache.get(min),
		dayToSell: cache.get(max),
	};
}

let maxProfitTest1: number[] = [7, 1, 5, 3, 6, 4]; // 5
let maxProfitTest2: number[] = [7, 6, 4, 3, 1]; // 0
let maxProfitTest3: number[] = [3, 2, 1]; // 0
let maxProfitTest4: number[] = [2, 1, 3]; // 2
let maxProfitTest5: number[] = [5, 10, 5, 10]; // 5

console.log(maxProfit(maxProfitTest1));

console.log(maxProfit2(maxProfitTest1));
