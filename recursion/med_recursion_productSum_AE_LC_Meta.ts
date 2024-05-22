import * as utils from '../utils';

/** Product Sum | recursion | easy */
/*********************************************************** */
/** time = O(n) n: number of elements ;
 * space = O(d) d: max depth of nested arrays
 * */

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
/**
 * easy - recursion/backtracking - algoExpert - product sum
 * medium - recursion - leetcode ( meta ) - Nested List Weighted Sum
 * @ref https://leetcode.com/problems/nested-list-weight-sum/description/
 * @description
 * write a function that takes in a special array and returns its product sum.
 *
 * A special array -> is a non-empty array that contains either integers or 'special'
 * arrays.  The product sum of a 'special' array is the sum of its elements, where
 * 'special' arrays inside it are summed themselves and then multiplied by their
 * level of depth.
 *
 * The depth of a 'special' array is how far nested it is.  For instance, the depth of
 * [] = 1.  The depth of the inner array in [[]] = 2; the depth of the innermost array
 * in [[[]]] = 3.
 *
 * Therefore the product sum of [x,y] = x + y; the product sum of [x, [y, z]] = x + 2*(y + z);
 * the product sum of [x,[y,[z]]] = x + 2*(y + 3*(z))
 *
 * @summary
 * 1. create sub function that peforms recursion / dfs
 * 2. in the subfunc, check if array,
 * 	2.a if so initiate sub function again & increase depth by one, add to sum
 * 	2.b if not, multiply integer * depth, add to sum
 * 3. return sum
 * @param array
 * @param mult
 * @param sum
 * @returns
 */
type specialArray = number | number[];

function productSum(array: number[], mult: number = 1, sum: number = 0): number {
	console.log('mult', mult);

	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i] as any as number[], mult + 1);
			// type coercion, i dont know why -> do research...
		} else {
			console.log(`${array[i]} times ${mult}`);
			sum += array[i] * mult;
		}
	}
	return sum;
}

const tests = {
	ex1: [5, 2, [7, -1], 3, [6, [-13, 8], 4], 5, 8], // 40
	ex2: [[1, 1], 2, [1, 1]], // 10
	ex3: [1, [4, [6]]], // 27
	ex4: [0], // 0
};

const { ex3: ex } = tests;

utils.timed('res', productSum, [ex]);
