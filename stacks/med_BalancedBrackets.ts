import * as utils from '../utils'


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

	let chars: string[] = ["(",")","{","}","[","]"];
	let charsDict: {[key:string]: string} = { ')':'(', ']':'[', '}':'{'};
	let stack: string[] = [];

	for(let item of string){
		if(chars.indexOf(item) % 2 == 0){
			stack.push(item)
		}else if (chars.indexOf(item) % 2 > 0){
			if(stack.length == 0){
				return false;
			};
			if(stack[stack.length-1] === charsDict[item]){
				stack.pop();
			}else{
				return false;
			};
		}
	}
  return stack.length === 0;
}

let balancedBracketsTest1: string = "([])(){}(())()()"
let balancedBracketsTest2: string = "()[]{}{"
let balancedBracketsTest3: string = "(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"
let balancedBracketsTest4: string = "()()[{()})]"
let balancedBracketsTest5: string = "(()())((()()()))"
let balancedBracketsTest6: string = "{}()"
let balancedBracketsTest7: string = "()([])"
let balancedBracketsTest8: string = "((){{{{[]}}}})"
let balancedBracketsTest9: string = "(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())"
let balancedBracketsTest10: string = "(()agwg())((()agwga()())gawgwgag)"
let balancedBracketsTest11: string = "{}gawgw()"


utils.timed('res', balancedBrackets, [balancedBracketsTest10])