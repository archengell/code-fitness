
/**
 * @name generateParenthesis medium Neet / LC #22 - Generate Parentheses
 * *** need to draw this out to fully understand when you add
 * *** this to PDF!  Revisit youtube video while doing it!
 * @acess https://leetcode.com/problems/generate-parentheses/ 
 * @description
 * Given (n) pairs of parentheses, write a function to generate all
 * all combinations of well-formed parentheses.
 * @summary
 * *used backtracking recursion arrow function!!!
 * 3 conditions: (1) o=c=n, (2) o<n, (3) c<o 
 * (1) return string, (2/3) { stack.push(o/c), recursion, pop stack }
 * @param n 
 * @returns 
 */
function generateParenthesis(n: number): string[] {

    let res: string[] = []
    let stack: string[] = []

    let backtrack = ((open: number, close: number): void => {
        // base case
        if(open === n && close === n){
            res.push(stack.join(""))
            return 
        }
        // recursive cases
        if(open < n){
            stack.push('(')
            backtrack(open+1, close)
            stack.pop()
        }
        if(close < open){
            stack.push(')')
            backtrack(open, close+1)
            stack.pop()
        }
    })
    // initiate recursion...
    backtrack(0,0)
    return res
};

let genParen1: number = 3;

console.log(generateParenthesis(genParen1))
