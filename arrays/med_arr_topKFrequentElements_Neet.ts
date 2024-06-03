import * as utils from '../utils';

/**
 * @name medium - array - Neet/Leet - top K-Frequent Elements
 * @ref
 * @description
 * Given an interger array [nums] and an integer, K, return
 * the K most frequent elements.  You may return the answer
 * in any order.
 * @example
 * @summary
 * 1. map to count/store frequencies
 * 2. sort map in descending order by freq
 * 3. use while loop to extract k freq elems
 * @param nums
 * @param k
 * @returns
 */
/**
 * Time Complexity:
 * - Building the frequency map: O(n) where n is the number of elements in the input array nums.
 * - Sorting the frequency map entries: O(n log n) where n is the number of unique elements in nums.
 * - Constructing the result array: O(n) where n is the value of k.
 * Therefore, the overall time complexity of the topKFrequent function is O(n log n).
 *
 * Space Complexity:
 * - The freqMap object: O(n) where n is the number of unique elements in nums.
 * - The res array: O(k) where k is the value of k.
 * - The sortedFreqEntri<wbr>es array: O(n) where n is the number of unique elements in nums.
 * Therefore, the overall space complexity of the topKFrequent function is O(n)
 */
// o-nlogn-time >94%| o-n-space
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

	// o-nlogn-time | o-n-space
	let sortedFreqEntries = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

	// o-n-time
	while (count < k) {
		// o-1-time
		res.push(parseInt(sortedFreqEntries[count][0]));
		count++;
	}

	return res;
}

// alt, faster sln -> same time/space
function topKFrequent1(nums: number[], k: number): number[] {
	const frequency_counter: Record<number, number> = {};

	for (const num of nums) {
		frequency_counter[num] = (frequency_counter[num] || 0) + 1;
	}

	const frequency_entries = Object.entries(frequency_counter).sort((a, b) => b[1] - a[1]);

	// only real diff is using slice approach in lieu of while loop
	const top_n_entries = frequency_entries.slice(0, k).map((val) => parseInt(val[0]));

	return top_n_entries;
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
