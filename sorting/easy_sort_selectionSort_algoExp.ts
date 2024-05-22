import * as utils from '../utils';

/**
 * Selection Sort | Sorting | Easy
 * @description
 * @summary
 * @param array
 * @returns
 */
function selectionSort(array: number[]) {
	for (let i = 0; i < array.length - 1; i++) {
		let xMinIdx: number = i;
		for (let x = i + 1; x < array.length; x++) {
			if (array[x] < array[xMinIdx]) {
				xMinIdx = x;
			}
		}
		utils.swap(i, xMinIdx, array);
	}
	return array;
}
