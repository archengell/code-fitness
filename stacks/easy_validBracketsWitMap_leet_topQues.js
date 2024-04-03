/**
 * *** LEETCODE | STRING / STACK | EASY |
 * @description
 * @summary
 * @param str
 * @returns
 */
function areBracketsValidWithMap(str) {
    let charMap = new Map([
        ['(', ')'],
        ['{', "}"],
        ['[', ']']
    ]);
    let closingbrackets = ')}]';
    let stack = [];
    for (let char of str) {
        //ex5: stack => )))}]} => 0:) 1:) 2:) 3:} 4:] 5:} 
        if (charMap.has(char)) {
            stack.push(charMap.get(char));
            console.log(stack);
            // then once you get to }, pop stack -> }
        }
        else if (closingbrackets.includes(char) && char !== stack.pop())
            return false;
    }
    return stack.length === 0;
}
;
// let bracketsTest1: string = "()[]{}"
// let bracketsTest2: string = "(]"
// let bracketsTest3: string = "((((){}))){}{)})"
// let bracketsTest4: string = "({[{)[]{}}]}"
// let bracketsTest5: string = "((({[{}]})))"
// let bracketsTest6: string = "(()agwg())((()agwga()())gawgwgag)"
// let bracketsTest7: string = "{}gawgw()"
console.log(areBracketsValidWithMap(bracketsTest7));
