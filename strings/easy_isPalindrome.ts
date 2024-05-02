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

let test1: string = 'A man, a plan, a canal: Panama'; // true
let test2: string = 'C  .CR GT"tqt"TG RC.66C'; // false
let test3: string = 'abcdcba'; // true
let test4 = 'Delia saw i was ailed'; //true
let test5 = 'repaper'; // true
let test6 = 'saippuakivikauppias'; // true
console.log(isPalindrome_Leet(test2));
console.log(isPalindrome_Pointer_Leet(test2));
