import * as utils from '../utils';

/**
 * @ref https://leetcode.com/problems/search-a-2d-matrix/
 * @description
 * You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in an increasing order
 * The first integer of each row is greater than the
 * last integer of the previous row
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * @summary
 * - create a bs subfunction
 * - treat matrix rows as if a first level bs approach
 * - use the start, end of the matrix row to run bs logic
 * - *** don't forget while(min <= max) !!! ***
 */
// time: on2 || space: o1
function search2dMatrix_brute(matrix: number[][], target: number): boolean {
	for (let row of matrix) {
		for (let num of row) {
			if (num === target) return true;
		}
	}
	return false;
}

// time: olog(n+m) || space: o1
// speed: 57ms
function search2dMatrix_opt(matrix: number[][], target: number): boolean {
	let rowMin = 0;
	let rowMax = matrix.length - 1;

	while (rowMin <= rowMax) {
		let mid = Math.floor((rowMin + rowMax) * 0.5);
		let start = matrix[mid][0];
		let end = matrix[mid][matrix[mid].length - 1];
		if (target === start || target === end) {
			return true;
		} else if (target > end) {
			rowMin = mid + 1;
		} else if (target < start) {
			rowMax = mid - 1;
		} else {
			return _bs(matrix[mid], target);
		}
	}
	return false;
}

function _bs(arr: number[], target: number): boolean {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let mid = Math.floor((min + max) * 0.5);
		if (arr[mid] < target) {
			min = mid + 1;
		} else if (arr[mid] > target) {
			max = mid - 1;
		} else {
			return true;
		}
	}
	return false;
}

// recursion approach...
// faster approach: 49ms
function bs_recur(arr: number[], target: number, min: number, max: number): boolean {
	if (min > max) return false;

	let mid = Math.floor((min + max) / 2);
	if (target === arr[mid]) return true;

	if (target < arr[mid]) {
		return bs_recur(arr, target, min, mid - 1);
	} else {
		return bs_recur(arr, target, mid + 1, max);
	}
}

function search2dMatrix_recur(matrix: number[][], target: number): boolean {
	for (let i = matrix.length - 1; i >= 0; i--) {
		if (target < matrix[i][0]) continue;

		return bs_recur(matrix[i], target, 0, matrix[i].length - 1);
	}
	return false;
}

function search2DMatrix_2(matrix: number[][], target: number): boolean {
	for (let row = 0; row < matrix.length; row++) {
		if (matrix[row].includes(target)) {
			return binarySearch(matrix[row], target) >= 0;
		}
	}
	return false;
}

function binarySearch(array: number[], target: number): number {
	let min: number = 0;
	let max: number = array.length - 1;
	let sorted: number[] = array.sort((a: number, b: number) => a - b);
	let mid: number;

	while (min <= max) {
		mid = Math.floor((min + max) / 2);
		if (sorted[mid] < target) {
			min = mid + 1;
		} else if (sorted[min] > target) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

let examples = {
	test1: {
		matrix: [
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		target: 3,
	},
	test2: {
		matrix: [
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		target: 13,
	},
	test3: {
		matrix: [
			[-8, -7, -5, -3, -3, -1, 1],
			[2, 2, 2, 3, 3, 5, 7],
			[8, 9, 11, 11, 13, 15, 17],
			[18, 18, 18, 20, 20, 20, 21],
			[23, 24, 26, 26, 26, 27, 27],
			[28, 29, 29, 30, 32, 32, 34],
		],
		target: -5,
	},
};

const { matrix, target } = examples['test3'];

utils.timed('res', search2dMatrix_opt, [matrix, target]);
