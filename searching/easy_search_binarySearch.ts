import * as utils from '../utils';

/** Binary Search | Searching | Easy */
/**************************************************** */
/**
 * @ref https://leetcode.com/problems/binary-search/description/
 * @description
 * Write a function that takes in a sorted array of integers as well as
 * a target integer.  The function should use the Binary Search algorithm
 * to determine if the target integer is contained in the array and should
 * return its index, otherwise -1.
 * @summary
 *
 */

export interface IBinarySrchInput {
	[key: string]: {
		array: number[];
		target: number;
	};
}

/**
 * @description binary search:: time: O(logn) | space: O(1)
 * @param array
 * @param target
 * @returns
 * @raises
 */
function binarySearch(array: number[], target: number): number {
	// array.sort((a, b) => a - b);
	let min: number = 0;
	let max: number = array.length - 1;
	while (min <= max) {
		let mid: number = Math.floor((min + max) * 0.5);
		if (array[mid] < target) {
			min = mid + 1;
		} else if (array[mid] > target) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

function bs_recurs(nums: number[], target: number, left = 0, right = nums.length - 1): number {
	if (left > right) return -1;

	const mid = Math.floor((left + right) / 2);
	if (nums[mid] === target) {
		return mid;
	}

	if (target > nums[mid]) {
		return bs_recurs(nums, target, mid + 1, right);
	}

	return bs_recurs(nums, target, left, mid - 1);
}

let ex: IBinarySrchInput = {
	test8: {
		array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
		target: 33,
		// output: 3
	},
	test2: {
		array: [40, 41, 42, 44, 45, 1003],
		target: 44,
		// output: 3
	},
	test9: {
		array: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
		target: 61,
		// output: 6
	},
	test16: {
		array: [1, 5, 23, 111],
		target: 120,
		// output: -1
	},
	test0: {
		array: [-1, 0, 3, 5, 9, 12],
		target: 9,
	},
};

const { array, target } = ex.test8;

utils.timed('res', binarySearch, [array, target]);

utils.timed('res', bs_recurs, [array, target]);
