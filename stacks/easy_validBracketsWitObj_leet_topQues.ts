

/**
 * *** LEETCODE | STRING / STACK | EASY | 
 * @description
 * @summary
 * @param str 
 * @returns 
 */
function areBracketsValidWithObj(str: string): boolean {
    
    let charMap: {[key:string]: string} ={
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
   
    let stack: string[] = [];
    
    for(let char of str){
        // ex5: ((({[{ | }]}))) => stack => )))}]} => 0:) 1:) 2:) 3:} 4:] 5:} 
        // *** need to use .includes() for (TS)!! 
        if((Object.keys(charMap).includes(char))){
            stack.push(charMap[char]) 
        // then once you get to }, pop stack -> }
            console.log(stack)
        // need else if, or error
        }else if((Object.values(charMap).includes(char) && 
        char !== stack.pop())) return false 
    }
    return stack.length === 0
};

let bracketsTest1: string = "()[]{}" // true
let bracketsTest2: string = "(]" // false
let bracketsTest3: string = "((((){}))){}{)})" // false
let bracketsTest4: string = "({[{)[]{}}]}" // false
let bracketsTest5: string = "((({[{}]})))" // true
let bracketsTest6: string = "(()agwg())((()agwga()())gawgwgag)" // false
let bracketsTest7: string = "{}gawgw()" // true

console.log(areBracketsValidWithObj(bracketsTest5))


