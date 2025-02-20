import * as utils from '../utils';

/**
 * @name medium - Product of Array Except Self
 * @link https://leetcode.com/problems/product-of-array-except-self/description/
 * @nc_link https://neetcode.io/problems/products-of-array-discluding-self
 * @description
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i]
 * @example
 * @summary
 *
 * @param array
 * @returns number[]
 */
// o(n^2) time | o(n) space --> 4.103ms
function productExceptSelf_On2(array: number[]): number[] {
	let res = [];
	for (let i = 0; i < array.length; i++) {
		let prod = 1;
		for (let j = 0; j < array.length; j++) {
			if (j !== i) prod *= array[j];
		}
		res.push(prod);
	}
	return res;
}

//o(n) time | o(n) space --> 0.545ms
// This function calculates the product of all numbers to the left and
// right of each index, and then multiplies these two products together
// to get the final result. This approach avoids dividing by zero and
//  has a time complexity of O(n).
function productExceptSelf_On(array: number[]): number[] {
	let res: number[] = new Array(array.length).fill(1);
	let leftRunningProduct: number = 1;
	let rightRunningProduct: number = 1;
	// input = [1, 2, 3, 4]
	// [1, 1, 2, 6]
	for (let i = 0; i < array.length; i++) {
		res[i] = leftRunningProduct;
		leftRunningProduct *= array[i];
	}
	console.log('res1', res);
	/**
	 * res[3] = res1[3] * rightRunningProduct = 6 * (1 * 1 = 1) = 6
	 * res[2] = res1[2] * rightRunningProduct = 2 * (1 * 4 = 4) = 8
	 * res[1] = res1[1] * rightRunningProduct = 1 * (4 * 3 = 12) = 12
	 * res[0] = res1[0] * rightRunningProduct = 1 * (12 * 2 = 24) = 24
	 */
	for (let i = array.length - 1; i >= 0; i--) {
		res[i] *= rightRunningProduct;
		// running product is always one idx behind bc its not
		// being stored into res again after multiplication
		rightRunningProduct *= array[i];
	}
	console.log('res2', res);
	return res;
}

let arrOfProdTest1: number[] = [5, 1, 4, 2]; // [8, 40, 10, 20]
let arrOfProdTest2: number[] = [1, 8, 6, 2, 4];
let arrOfProdTest3: number[] = [-5, 2, -4, 14, -6];
let arrOfProdTest4: number[] = [9, 3, 2, 1, 9, 5, 3, 2];
let arrOfProdTest6: number[] = [0, 0, 0, 0];
let arrOfProdTest10: number[] = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrOfProdTest11: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrOfProdTest7: number[] = [-1, -1, -1];
let arrOfProdTest8: number[] = [1, 2, 3, 4];

utils.timed('arrayOfProducts_On2', productExceptSelf_On2, [arrOfProdTest1]);

utils.timed('arrayOfProducts_On', productExceptSelf_On, [arrOfProdTest1]);
