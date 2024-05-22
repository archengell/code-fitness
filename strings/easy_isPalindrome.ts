/**
 * easy - palindrome check - algoexpert
 * @description
 * write a function that takes a non-empty strin and returns a boolean
 * respresenting whether the string is a palindrome ( a string that's
 * written the same forward and backward.  Note: single strings are
 * palindromes.)
 * @summary
 * @param inputString
 * @returns
 */
function isPalindrome(string: string) {
	// let strArr:string[] = [...string]
	if (string.length == 1) return true;
	let temp: boolean[] = [];

	for (let i = 0; i < string.length; i++) {
		let num: number = string.length - 1;
		if (string[i] === string[num - i]) {
			temp.push(true);
		} else {
			temp.push(false);
		}
	}
	console.log(temp);
	if (temp.every((item) => item == true)) return true;
	return false;
}

/**
 * @description
 * @summary
 * @param inputString
 * @returns {boolean}
 */
function isPalindrome_Opt(inputString: string): boolean {
	let res: boolean =
		JSON.stringify([...inputString]) === JSON.stringify([...inputString].reverse());
	console.log(res);
	return res;
}

/**
 *
 * @param str
 * @returns
 */
function isPalindrome_Leet(str: string): boolean {
	let alphanumeric: string[] = getAlphanumeric(str);
	// console.log(alphanumeric)
	let res: boolean = JSON.stringify(alphanumeric) === JSON.stringify(alphanumeric.reverse());
	return res;
}

function isPalindrome_Pointer_Leet(str: string): boolean {
	const strArr = getAlphanumeric(str);
	let right = 0;
	let left = strArr.length - 1;
	while (right < left) {
		if (strArr[right] === strArr[left]) {
			right++;
			left--;
		} else {
			return false;
		}
	}
	return true;
}

function getAlphanumeric(str: string) {
	let alphanumerals: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
	return [...str.toLowerCase()].filter((item) => alphanumerals.includes(item));
}

// most recent sln: a bit cleaner than above, imo
function isPalindrome2(s: string): boolean {
	// reformat string to remove space and special characters
	const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
	// o-n-time | o-n-space
	const str = [...s.toLowerCase()].filter((item) => alphanumeric.includes(item));
	// two-pointer system
	let left = 0;
	let right = str.length - 1;
	// o-n-time
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}
// best sln 38ms
function isPalindrome3(s: string): boolean {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	if (s.length < 1) {
		return true;
	}
	// ** constucting two pointer with for-loop **
	for (let i = 0, p = s.length - 1; i < s.length; i++, p--) {
		if (s[i] !== s[p]) {
			return false;
		}
	}
	return true;
}
// recursion approach
// o-n-time | o-n-space
function isPalindrome4(s: string): boolean {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	return _isPalindrome(0, s.length - 1, s);
}
function _isPalindrome(startIdx: number, endIdx: number, s: string) {
	if (startIdx >= endIdx) {
		return true;
	} else if (s.charAt(startIdx) !== s.charAt(endIdx)) {
		return false;
	} else {
		return _isPalindrome(startIdx + 1, endIdx - 1, s);
	}
}

let test1: string = 'A man, a plan, a canal: Panama'; // true
let test2: string = 'C  .CR GT"tqt"TG RC.66C'; // false
let test3: string = 'abcdcba'; // true
let test4 = 'Delia saw i was ailed'; //true
let test5 = 'repaper'; // true
let test6 = 'saippuakivikauppias'; // true
console.log(isPalindrome_Leet(test1));
console.log(isPalindrome_Pointer_Leet(test1));
console.log(isPalindrome4(test1));
