import * as utils from '../../../utils';

/**
 * @name easy - array - two num sum - algoexpert, leetcode
 * @access https://leetcode.com/problems/two-sum/
 * @description
 * Write a function that takes in an non-empty array of distint integers
 * and an integer that represents a target sum.  If any two numbers in the
 * input array sum up to the target sum, the function should return the numbers
 * in an array in any order.  If no two numbers sum up to the target sum,
 * the function should return an empty array.
 *
 * Note: the target sum has to be obtained by summing two different integers
 * in the array: you can't add a single integer to itself in order to obtain
 * the target sum.
 *
 * Note: you can add the same number twice as long as they're different indices.
 *
 * @example
 * Sample Input:
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 *
 * Sample Output:
 * [-1, 11]
 * @param nums
 * @param target
 * @returns numbers[] with two integers that much the criteria.
 * @summary
 *
 * FOR O(N) TIME & SPACE SLN USING MAP:
 * 1. create cache map
 * 2. loop through array
 * 3. calc diff = target - num[i]
 * 4. check if cache has diff => cache.has(diff)
 * 5. return [num[i], i]
 * 6. else store diff in cache => cache.set(diff, i)
 *
 * FOR O(N-LOGN)-TIME & O(1)-SPACE (*Note: approach used for Three/FourSum) **Also, TwoSum II**
 * 1. set left, right = 0, arr.length-1
 * 2. sort arr
 * 3. while(left < right)
 * 4. --- calc sum = arr[left] + arr[right]
 * 5. --- if sum === target  return [arr[left], arr[right]]
 * 6. --- else if sum < target => ++left
 * 7. --- else if sum > target => --right
 * 8. return [] / null / -1
 */

// time: O(n) | space O(1) : 544 ms
function twoNumSum_slow(nums: number[], target: number) {
	let diff: number;
	let idx: number;
	let res: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		diff = target - nums[i];
		idx = nums.findIndex((num) => num == diff);
		if (idx > 0 && i != idx) {
			res = [i, idx];
			return res;
		}
	}
	return res;
}

// time: O(n) | space O(1) : 188 ms
function twoNumSum_fast(nums: number[], target: number) {
	let idx = 0;
	for (let i = 0; i < nums.length; i++) {
		idx = nums.indexOf(target - nums[i]);
		if (nums[idx] + nums[i] === target && i !== idx) return [idx, i];
	}
}

// time: O(n) | space O(1) : fastest!! 69 ms 94.5% faster
// Approach: One-pass Hash Table w/ OBJECT
function twoNumSum_fastest_obj(nums: number[], target: number) {
	let objMap: { [key: number]: number } = {};

	for (let i = 0; i < nums.length; i++) {
		if (objMap.hasOwnProperty(nums[i])) {
			return [nums[i], nums[objMap[nums[i]]]];
		}
		objMap[target - nums[i]] = i;
	}
}

// time: O(n) | space O(1) : fast using map in lieu of object...
// Approach: One-pass Hash Table w/ MAP
function twoNumSum_fastest_map(nums: number[], target: number) {
	// create cache
	let cache = new Map<number, number>();
	// loop thru nums array
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (cache.has(diff)) return [i, cache.get(diff)];
		cache.set(nums[i], i);
	}
}

// time: On | space: On (bc of sorting array)
function twoSum_pointer(nums: number[], target: number): [number, number] {
	let left = 0;
	let right = nums.length - 1;

	nums.sort((a, b) => a - b);

	while (left < right) {
		let sum = nums[left] + nums[right];
		if (sum === target) return [nums[left], nums[right]];
		if (sum > target) right--;
		if (sum < target) left++;
	}
	return [null, null];
}

type TwoNumSumInput = {
	array: number[];
	targetSum: number;
};

let testCases: { [key: string]: TwoNumSumInput } = {
	test1: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
	test2: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
	test3: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
	test4: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
	test5: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
	test6: {
		array: [3, 5, -4, 8, 11, 1, -1, 6],
		targetSum: 10,
	},
};

let { array, targetSum } = testCases['test6'];

utils.timed('twoNumSum_fastest_obj', twoNumSum_fastest_obj, [array, targetSum]);

utils.timed('twoNumSum_fastest_map', twoNumSum_fastest_map, [array, targetSum]);

utils.timed('twoSum_pointer', twoSum_pointer, [array, targetSum]);
