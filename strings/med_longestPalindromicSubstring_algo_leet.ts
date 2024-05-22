import { match } from 'assert';

/**
 * AlgoExpert/Neet/Leet - string - medium - Longest Palindromic SubString
 * @description Given a string, write a function that returns its
 * longest palindromic substring.  You can assume that there will only be
 * (1) substring.
 * @summary time: o(n^2) | space: o(n)
 *  **write steps**
 * @param string
 * @returns
 */
function longestPalindromicSubstringV1(string: string): string {
	let oddLen: number = 0;
	let evenLen: number = 0;
	let res: string;
	let resLen: number = 0;
	let start: number = 0;
	let end: number = 0;

	if (!string || string.length < 0) return '';

	for (let i = 0; i < string.length; i++) {
		oddLen = expandFromCenter(string, i, i);
		evenLen = expandFromCenter(string, i, i + 1);
		resLen = Math.max(oddLen, evenLen);
		if (resLen > end - start) {
			start = i - Math.floor((resLen - 1) / 2);
			end = i + Math.floor(resLen / 2);
		}
	}
	res = string.slice(start, end + 1);
	return res;
}

function expandFromCenter(str: string, left: number, right: number): number {
	while (left >= 0 && right < str.length && [...str][left] === [...str][right]) {
		--left; // left += 1
		++right; // right += 1
	}
	return right - left - 1;
}

function longestPalindromicSubstringV2(string: string): string {
	let left: number = 0;
	let right: number = 0;
	let res: string = '';
	let resLen: number = 0;

	for (let i = 0; i < string.length; i++) {
		// check odd palindromes
		left = right = i;
		while (left >= 0 && right < string.length && [...string][left] == [...string][right]) {
			if (right - left + 1 > resLen) {
				res = string.slice(left, right + 1);
				resLen = right - left + 1;
			}
			--left; // = idx1 -= 1
			++right; // = idx2 += 1
		}

		// check even palindromes
		left = i;
		right = i + 1;
		while (left >= 0 && right < string.length && [...string][left] == [...string][right]) {
			if (right - left + 1 > resLen) {
				res = string.slice(left, right + 1);
				resLen = right - left + 1;
			}
			--left; // = idx1 -= 1
			++right; // = idx2 += 1
		}
	}
	// console.log(res)
	return res;
}

function longestPalindromicSubstring(string: string): string {
	let res: string;
	let subStr: string;
	let map = new Map<number, string>();

	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			subStr = string.slice(i, j + 1);
			// console.log(subStr)
			if (isPalindrome(subStr)) {
				map.set(subStr.length, subStr);
			}
		}
	}
	res = map.get(Math.max(...map.keys())) || '';
	console.log(res);
	return res;
}

function isPalindrome(str: string): boolean {
	return JSON.stringify([...str]) === JSON.stringify([...str].reverse());
}

// let palinTest: string = 'xyzzyx'
let longPalinSubStringTest: string = 'abaxyzzyxf';
let longPalinSubStringTest1: string = 'a';
let longPalinSubStringTest2: string = 'cbbd';
let longPalinSubStringTest3: string = "it's highnoon";
let longPalinSubStringTest4: string = "abccbait's highnoon";
let longPalinSubStringTest7: string = 'abcdefgfedcba';
let longPalinSubStringTest10: string = 'zzzzzzz2345abbbba5432zzbbababa';
let longPalinSubStringTest11: string = 'z234a5abbbba54a32z';
let longPalinSubStringTest12: string = 'z234a5abbba54a32z';
let longPalinSubStringTest13: string =
	'civilwartestingwhetherthatnaptionoranynartion \
soconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecome \
todedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthat \
nationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannot \
dedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggled \
herehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenor \
longrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobe \
dedicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisrather \
forustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetake \
increaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehigh \
lyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthof \
freedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
let longPalinSubStringTest14: string =
	'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
aaaaaaaaaaaaaaaaa';
let longPalinSubStringTest15: string = '';

// console.log(isPalindrome(palinTest))
console.time();
console.log(longestPalindromicSubstringV1(longPalinSubStringTest13));
console.timeEnd();
