/**
 * @description swap variables w/ js splice function
 * @summary o(n) time & space
 * @param targetIdx
 * @param sourceIdx
 * @param array
 */
export function swapWithSplice(targetIdx: number, sourceIdx: number, array: number[]) {
	let removed: number[] = array.splice(sourceIdx, 1);
	array.splice(targetIdx, 0, removed[0]);
}

/**
 * @description swaps desired numbers
 * @summary o(1) time & space
 * @param left
 * @param right
 * @param arr
 */
export function swap<T>(left: number, right: number, arr: T[]) {
	let temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
}

/**
 * @description wrapper to display time performance of func
 * @ref func.call vs apply vs bind https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
 * @param callback
 * @param args
 * @returns output of function
 * @summary
 *
 */
export function timed<U>(note: string, callback: Function, args: U[]) {
	console.time();
	console.log(`${note}`, callback.apply(this, args));
	console.timeEnd();
}

/**
 * @description binary search
 * @summary o(n*logn) time | o(n) space
 * @param arr
 * @param target
 * @returns {number} index of target, otherwise -1
 */
export function binarySearch(arr: number[], target: number): number {
	let sorted: number[] = arr.sort((a, b) => a - b);
	let min = 0;
	let max = sorted[sorted.length - 1];

	while (min <= max) {
		let mid = Math.floor((max - min) / 2);

		if (sorted[mid] < target) {
			min = mid + 1;
		} else if (sorted[mid] > target) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

/**
 * @description
 * @summary
 * @param arr
 * @returns map of elem frequency
 */
let us: any = [-1, 0, 1, 5, 5, 4, 3, 3, 3];
// o(n) time & space
export function getElemFrequencyWithMap<T>(arr: T[]): Map<T, number> {
	//this has to be a  number bc you are getting frequency...
	let map = new Map<T, number>();

	for (let num of arr) {
		map.set(num, 1 + (map.get(num) || 0)); // google swe approach
	}
	return map;
}
// timed('res', getElemFrequencyWithMap, us)

export function getElemFrequencyWithObject<T>(arr: any[]): any {
	let obj = {};
	for (let elem of arr) {
		obj[elem] = 1 + (obj[elem] || 0);
	}
	return obj;
}
// timed('res', getElemFrequencyWithObject, us)

/**
 * @description remove duplicate arrays within an array
 * @summary
 * @param nestedNumArr
 * @returns an array of unique arrays
 */
// o(n) time & space
export function removeDuplicateArrays(nestedNumArr: number[][]): number[][] {
	let convertToStrArr: string[] = nestedNumArr.map((item: number[]) => JSON.stringify(item));
	let strArrWithDupsRemoved: string[] = [...new Set(convertToStrArr)];
	let res: number[][] = strArrWithDupsRemoved.map((item: string) => Array.from(JSON.parse(item)));
	return res;
}

export function isNumberArr(value: any): boolean {
	if (!Array.isArray(value)) {
		return false;
	}
	if (value.some((elem: any) => typeof elem !== 'number')) {
		return false;
	}
	return true;
}
