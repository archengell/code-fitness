import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/concatenation-of-array/description/
 * @description
 * Given an integer array nums of length n, you want to create an array ans of length 2n
 * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 * Return the array ans.
 * @param nums
 * @returns
 */
function getConcatenation(nums: number[]): number[] {
	return [...nums, ...nums];
}

let getConcatenationTests = {
	test1: [1, 2, 1], // [1,2,1,1,2,1]
	test2: [1, 3, 2, 1], // [1,3,2,1,1,3,2,1]
};

const { test1: test } = getConcatenationTests;

utils.timed('res', getConcatenation, [test]);
