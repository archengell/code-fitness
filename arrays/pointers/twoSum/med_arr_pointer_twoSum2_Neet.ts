interface twoSum2 {
	numbers: number[];
	target1: number;
}

/**
 * @name medium - array_pointer - Leet/Neet - two sum II - 167
 * @access https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @description
 * Given a 1-indexed array of integers that is sorted in
 * ascending order, find two numbers such that they add up to
 * a specific target number.  Let this two numbers be
 * numbers[idx1] and numbers[idx2] where 1 <= idx1 < idx2
 * <= numbers.length
 *
 * Return the indices of the two numbers, idx1 & idx2, added
 * by one as an integer array: [idx1, idx2].
 * @example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1,
 * index2 = 2. We return [1, 2].
 *
 * @summary
 * @param numbers
 * @param target
 * @returns
 * @raises
 */
// o(n) time | o(1) space
function twoSum2(numbers: number[], target: number): number[] {
	let left: number = 0;
	let right: number = numbers.length - 1;
	numbers.sort((a, b) => a - b);
	while (left < right) {
		let sum: number = numbers[left] + numbers[right];
		if (sum > target) {
			--right;
		} else if (sum < target) {
			++left;
		} else {
			return [numbers[left], numbers[right]];
		}
	}
	// added +1 bc it states a 1-indexed array of integers!
}

let twoSum2Test1: twoSum2 = {https://go.dev/doc/telemetry
	numbers: [2, 7, 11, 15],
	target1: 9,
};
let twoSum2Test2: twoSum2 = {
	numbers: [2, 3, 4],
	target1: 6,
};
let twoSum2Test3: twoSum2 = {
	numbers: [-1, 0],
	target1: -1,
};
let twoSum2Test4: twoSum2 = {
	numbers: [3, 5, -4, 8, 11, 1, -1, 6],
	target1: 10,
};

let { numbers, target1 } = twoSum2Test4;

console.log(twoSum2(numbers, target1));
