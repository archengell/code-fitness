import * as utils from '../../utils';

interface IRes {
	resString: string;
	resNum: number;
}

/**
 * hard - algoExp / Neet150 - longest Substring w/o Duplication
 * @description
 * Write a function that takes in a string and returns an object
 * showing the longest substring and its length
 * @param string
 * @returns {number || string} depends
 * @summary
 *  1. init resArr w/ [0,1], resObj, startIdx, subStrLen
 *  2. loop thru str
 *  3. if duplication detected, reset startIdx to next unique char position
 *  4. store str length to map
 *  5. update subStrLen < i+1-startIdx, update resArr w/ [startIdx, i+1]
 *  6. extract subStr => str.splice(resArr[0], resArr[1])
 */
function getMaxLengthAndSubstringWithoutDups(string: string): IRes {
	let resStartIdx = 0;
	let resEndIdx = 1;
	let resObj = {} as IRes; //initialize a typed, empty object!
	let startIdx: number = 0;
	let cache = new Map<string, number>();
	let subStrLen: number;

	for (let i = 0; i < string.length; i++) {
		if (cache.has(string[i])) {
			startIdx = Math.max(startIdx, cache.get(string[i])! + 1);
		}
		subStrLen = resEndIdx - resStartIdx;
		if (subStrLen < i + 1 - startIdx) {
			resStartIdx = startIdx;
			resEndIdx = i + 1;
		}
		cache.set(string[i], i);
	}

	resObj['resString'] = string.slice(resStartIdx, resEndIdx);
	resObj['resNum'] = resObj['resString'].length;
	return resObj;
}

function getMaxLengthofSubStringWithoutDups(str: string) {
	const charSet = new Set();
	let left = 0;
	let res = 0;
	for (let right = 0; right < str.length; right++) {
		while (charSet.has(str[right])) {
			charSet.delete(str[left]);
			left += 1;
		}
		charSet.add(str[right]);
		res = Math.max(res, right - left + 1);
	}
	return res;
}

let examples = {
	ex1: 'clementisacap',
	ex2: '',
	ex3: 'abcabcbb',
	ex4: 'pwwkew',
};

const { ex1 } = examples;

utils.timed('res', getMaxLengthofSubStringWithoutDups, [ex1]);

utils.timed('resWithString', getMaxLengthAndSubstringWithoutDups, [ex1]);
