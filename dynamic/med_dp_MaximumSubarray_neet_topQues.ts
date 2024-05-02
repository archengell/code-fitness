/**
 * @description Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum and return its sum.
 * @summary
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * @param nums
 * @returns
 */

// o(n2) time | o(1) space
// least efficient, and wouldn't work under leetcode time limit
// ok first pass during interview... 1.849 ms
function maxSubArr_brute_On2(nums: number[]): number {
	let maxSubArr: number = -Infinity;
	let currSubArr: number;

	for (let i = 0; i < nums.length; i++) {
		currSubArr = 0;
		for (let j = i; j < nums.length; j++) {
			currSubArr += nums[j];
			maxSubArr = Math.max(maxSubArr, currSubArr);
		}
	}
	return maxSubArr;
}

/**
 * return SubArr with largest Sum and it's array
 * time: On
 * space: On
 */

type maxSubArrAndSum_On = {
	maxSum: number;
	start: number;
	end: number;
	maxSubArr: number[];
};
function maxSubArrAndSum_On(nums: number[]): maxSubArrAndSum_On {
	let maxSum = nums[0];
	let currSum = nums[0];
	let start = 0;
	let end = 0;
	let temp = 0;

	// start w. next integer bc you've already initiated with nums[0]
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > currSum) {
			currSum = nums[i];
			temp = i;
		} else {
			currSum += nums[i];
		}

		if (currSum > maxSum) {
			maxSum = currSum;
			start = temp;
			end = i;
		}
	}
	return {
		maxSum,
		start,
		end,
		maxSubArr: nums.slice(start, end + 1),
	};
}

/**
 * o(n) time | o(1) space => dynamic programming w/ Kadane's Algo
 * optimal solution for interview... 0.268 ms
 */
function maxSubArr_dp_On(nums: number[]): number {
	let maxSum: number = -Infinity;
	let currSum: number = -Infinity;

	for (let num of nums) {
		currSum = Math.max(num, currSum + num);
		maxSum = Math.max(maxSum, currSum);
	}

	return maxSum;
}

let maxSubArrTest1: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSubArrTest2: number[] = [1];
let maxSubArrTest3: number[] = [5, 4, -1, 7, 8];
let maxSubArrTest4: number[] = [-2, -3, 4, -1, -2, 1, 5, -3];

// console.time();
// console.log(maxSubArr_brute_On2(maxSubArrTest4));
// console.timeEnd();

console.time();
console.log(maxSubArrAndSum_On(maxSubArrTest4));
console.timeEnd();

console.time();
console.log(maxSubArr_dp_On(maxSubArrTest4));
console.timeEnd();
