import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/contains-duplicate-ii/description/
 * @summary
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * time: On
 * space: O1
 * beats 87.76% of users w/ TS
 * @param nums
 * @param k
 * @returns
 */
function containsDuplicateII(nums: number[], k: number): boolean {
	let cache = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(i - cache.get(nums[i])) <= k) return true;
		cache.set(nums[i], i);
	}
	return false;
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
	let store = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		if (store.has(nums[i]) && Math.abs(store.get(nums[i]) - i) <= k) return true;
		store.set(nums[i], i);
	}
	return false;
}

const ex1 = {
	input: [1, 2, 3, 1],
	k: 3, // 0-3 = 3 true
};
const ex2 = {
	input: [1, 0, 1, 1],
	k: 1, // 2-3 = 1 true
};
const ex3 = {
	input: [1, 2, 3, 1, 2, 3],
	k: 2, // 1-4 > 2 false
};

const ex4 = {
	input: [2, 3, 5, 7, 0, 2],
	k: 4,
}; // 0-5 > 4 false

const { input, k } = ex3;

utils.timed('res', containsDuplicateII, [input, k]);
