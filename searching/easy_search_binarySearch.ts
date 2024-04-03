/** Binary Search | Searching | Easy */
/**************************************************** */
/**
 * Write a function that takes in a sorted array of integers as well as
 * a target integer.  The function should use the Binary Search algorithm
 * to determine if the target integer is contained in the array and should
 * return its index, otherwise -1.
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
	let min: number = 0;
	let max: number = array.length - 1;
	let sortdArr: number[] = array.sort((a, b) => a - b);
	while (min <= max) {
		let mid: number = Math.floor((min + max) * 0.5);
		if (target > sortdArr[mid]) {
			min = mid + 1;
		} else if (target < sortdArr[mid]) {
			max = mid - 1;
		} else {
			console.log(mid);
			return mid;
		}
	}
	return -1;
}

let binarySearchTests: IBinarySrchInput = {
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
};

binarySearch(binarySearchTests['test2']['array'], binarySearchTests['test2']['target']);
