import * as utils from '../../utils';

/**
 * @ref https://leetcode.com/problems/move-zeroes/description/
 * @description
 * Given an integer array nums, move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 * @summary
 * - almost identical to remove duplicates from sorting array in 0-1-space
 * - set pointer
 * - increase pointer when nums[i] !== target ( this case it's 0)
 * - return mutated arr
 * @param nums
 */
// initial solution based off of another meta problem: top K elements
// not fast 91ms beats 26% (weird: this is the same approach as another sln that's 63ms! )
// o-n-time
function moveZeroes(nums: number[]): void {
	let x = 0;
	// o-n-time
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) nums[x++] = nums[i];
		// 1: [0, 1, 0, 3, 12] => nums[0] = nums[1] === 1
		// 2: [1, 1, 0, 3, 12] => nums[1] = nums[3] === 3
		// 3: [1, 3, 0, 3, 12] => nums[2] = nums[3] === 12
		// 4: [1, 3, 12, 3, 12]
	}
	// o-n-time
	// k = x bc x increments after assignment: x++
	for (let k = x; k < nums.length; k++) {
		nums[k] = 0;
	}
	console.log(nums);
}

// faster solution, same time complexity: 62ms beats
function moveZeroes1(nums: number[]): void {
	let nonZeroIdx = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			[nums[nonZeroIdx], nums[i]] = [nums[i], nums[nonZeroIdx]];
			nonZeroIdx++;
		}
	}
	console.log(nums);
}

// my alt sln, same time complexity, but using swap function in lieu of es6 feature
function moveZeroes2(nums: number[]): void {
	let nonZeroIdx = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			swap(i, nonZeroIdx, nums);
			nonZeroIdx++;
		}
	}
	console.log(nums);
}

function swap(leftIdx: number, rightIdx: number, arr: number[]) {
	let temp = arr[leftIdx];
	arr[leftIdx] = arr[rightIdx];
	arr[rightIdx] = temp;
}

let testCases = {
	one: [0, 1, 0, 3, 12],
	two: [0],
};

const { one } = testCases;

utils.timed('res', moveZeroes2, [one]);
