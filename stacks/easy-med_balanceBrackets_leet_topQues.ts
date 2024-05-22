import * as utils from '../utils';

/**
 * *** LEETCODE | STRING / STACK | EASY |
 * @description
 * @summary
 * @param str
 * @returns
 */
// 67 ms
function balanceBrackets_Map(str: string): boolean {
	let bracketMap = new Map<string, string>([
		['(', ')'],
		['{', '}'],
		['[', ']'],
	]);

	let closingBrackets: string = ')}]';
	let stack: string[] = [];

	for (let char of str) {
		//ex5: stack => )))}]} => 0:) 1:) 2:) 3:} 4:] 5:}
		if (bracketMap.has(char)) {
			stack.push(bracketMap.get(char));
			// then once you get to }, pop stack -> }
		} else if (closingBrackets.includes(char) && char !== stack.pop()) return false;
	}

	return stack.length === 0;
}

// faster
// this approach fully utilizes the stack concept!
function balanceBrackets_Map_v1(str: string): boolean {
	const alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
	let bracketMap = new Map<string, string>([
		['(', ')'],
		['{', '}'],
		['[', ']'],
	]);

	let stack: string[] = [];

	// o(str)-time
	for (let char of str) {
		// o(36): alphabet + 0-9
		if (!alphanumeric.includes(char)) {
			// check if starting bracket
			if (bracketMap.has(char)) {
				// store o(char)-space
				stack.push(char);
			} else {
				// there was no initial starting bracket
				if (stack.length === 0) return false;
				// o(1)-time
				const top = stack.pop();
				// o(1)-time
				if (bracketMap.get(top) !== char) return false;
			}
		}
	}
	// o(1)-time
	return stack.length === 0;
}

function balanceBrackets_obj(str: string): boolean {
	let charObj: { [key: string]: string } = {
		'{': '}',
		'[': ']',
		'(': ')',
	};
	let closingBrackets: string = ')}]';
	let stack: string[] = [];

	for (let char of str) {
		// ex5: ((({[{ | }]}))) => stack => )))}]} => 0:) 1:) 2:) 3:} 4:] 5:}
		// *** need to use .includes() for (TS)!!
		if (charObj.hasOwnProperty(char)) {
			stack.push(charObj[char]);
			// then once you get to }, pop stack -> }
			console.log(stack);
			// need else if, or error
		} else if (closingBrackets.includes(char) && char !== stack.pop()) return false;
	}
	return stack.length === 0;
}

/**
 * AlgoExpert | Stack | Medium | Balanced Brackets
 * @description Write a function that takes in a string of brackets within
 * a range of characters accepted. The function should return a boolean
 * representing whether the brackets are balanced.
 * **NOTE THIS IS IDENTIAL TO easy_string_validBrackets_leet.
 * @param string
 * @returns {boolean}
 * @summary
 * 		1. init bracket map()
 * 		2. init stack
 * 		3. loop thru str
 * 		4. open/closed bracket conditional => push/pop
 * 		5. if char !== stack.pop() || stack.lenth !== 0
 */

function balancedBrackets(string: string) {
	let chars: string[] = ['(', ')', '{', '}', '[', ']'];
	let charsDict: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' };
	let stack: string[] = [];

	for (let item of string) {
		if (chars.indexOf(item) % 2 == 0) {
			stack.push(item);
		} else if (chars.indexOf(item) % 2 > 0) {
			if (stack.length == 0) {
				return false;
			}
			if (stack[stack.length - 1] === charsDict[item]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}

let tests = {
	brackets1: '()[]{}',
	brackets2: '(]',
	brackets3: '((((){}))){}{)})',
	brackets4: '({[{)[]{}}]}',
	brackets5: '((({[{}]})))',
	brackets6: '(()agwg())((()agwga()())gawgwgag)', // true
	brackets7: '{}gawgw()', // true
	bracketsT9: '()[]{}{',
	brackets10: '(((((({{{{{[[[[[([)])]]]]]}}}}}))))))',
	brackets11: '()()[{()})]',
	brackets12: '(()())((()()()))',
	brackets13: '{}()',
	brackets14: '()([])',
	brackets15: '((){{{{[]}}}})',
	brackets16: '(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())', // true
};

const { brackets7 } = tests;

utils.timed('res', balanceBrackets_Map_v1, [brackets7]);
