import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @description
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates ** in-place **
 * such that each unique element appears only once.  The relative order of the elements should be kept
 * the same.  Then return the number of unique elements in nums
 *
 * Change the array nums such that the first k elements of nums contain the unique elements.
 * in the order they were present in nums initially. The remaining elements of nums are not
 * important as well as the size of nums.
 *
 * Return k
 * @summary
 * ideal sln => pointer method
 * loop through
 * check if previous num === current num
 * swap positions
 *
 * naive sln =>
 * - remove duplicates with Set() and recreate array w/ Array.from()
 * - empty input array 'nums'
 * - repopulate nums by spreading converted SET
 * - return revised nums length
 * @param nums
 * @returns
 */

// o-n-time : o-1-space (ideal alt sln) ** best **
function removeDuplicates(nums: number[]): number {
	let x: number = 0;
	for (let i: number = 0; i < nums.length; i++) if (nums[i] !== nums[i + 1]) nums[x++] = nums[i];
	// [0, 1, 1, 1, 3, 4]
	// arr[3] != arr[4] so then nums[x=1] = 1
	// [0, 1, 1, 1, 3, 4]
	// arr[4] = 3 !== arr[5] = 4 so then nums[x=2] = 3
	// [0, 1, 3, 1, 3, 4]
	// arr[5] = 4 !== undefined so then nums[x=3] = 4
	// resArray = [0, 1, 3, 4, 3, 4]
	// k = x = 3
	return x;
}
// o-n-time : o-1-space (ideal sln)
function removeDuplicates1(nums: number[]): number {
	if (nums.length === 1) return 1;

	let p2 = 0;
	let p1 = 0;

	while (p2 < nums.length) {
		if (nums[p1] < nums[p2]) {
			nums[p1 + 1] = nums[p2];
			p1++;
		}
		p2++;
	}
	return p1 + 1;
}

// o-n-time : o-1-space (one-liner, not ideal bc it may not be easily read)
function removeDuplicates2(nums) {
	let p = 0;
	nums.forEach((n) => n > nums[p] && (nums[++p] = n));
	return p + 1;
}

// o-n-time : o-n-space => naive approach ( not desired )
function removeDuplicates3(nums: number[]): number {
	let res = Array.from(new Set(nums));
	nums.length = 0;
	nums.push(...res);
	return nums.length;
}
