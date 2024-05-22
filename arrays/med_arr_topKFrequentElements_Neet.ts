import * as utils from '../utils';

/**
 * @name medium - array - Neet/Leet - top K-Frequent Elements
 * @description
 * Given an interger array [nums] and an integer, K, return
 * the K most frequent elements.  You may return the answer
 * in any order.
 * @example
 * @summary
 * time => O(nlogn) space: O(n)
 * @param nums
 * @param k
 * @returns
 */
function topKFrequent(nums: number[], k: number): number[] {
	let freqMap: { [key: string]: number } = {};
	let res: number[] = [];
	let count = 0;

	// o-n-time
	for (let num of nums) {
		// o-n-space
		// 0-1-time
		freqMap[num] = (freqMap[num] || 0) + 1;
	}

	// o-nlogn-time
	let sortedFreqEntries = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

	// o-n-time
	while (count < k) {
		// o-1-time
		res.push(parseInt(sortedFreqEntries[count][0]));
		count++;
	}

	return res;
}

interface IkFreqElems {
	numArr: number[];
	k: number;
}

let kFreElemsTest1: IkFreqElems = {
	numArr: [1, 1, 1, 2, 2, 3, 3, 3, 3, 3],
	k: 2,
}; // [3,1]
let kFreElemsTest2: IkFreqElems = {
	numArr: [1],
	k: 1,
}; // [1]
let kFreElemsTest3: IkFreqElems = {
	numArr: [1, 2],
	k: 2,
}; // [1,2]
let kFreElemsTest4: IkFreqElems = {
	numArr: [4, 1, -1, 2, -1, 2, 3],
	k: 0,
}; // [-1,2]

let { numArr, k } = kFreElemsTest4;

utils.timed('res', topKFrequent, [numArr, k]);
