import * as utils from './utils'


// function groupAnagrams1(words: string[]): string[][] {
//     let anagramMap = new Map<string, string[]>();
//     let sortd: string;
//     let subgrp: string[];


//     for(let word of words){
//         sortd = [...word].sort().join('')
//         subgrp = anagramMap.get(sortd) || [];
//         subgrp.push(word)
//         anagramMap.set(sortd, subgrp)
//     }
//     console.log(anagramMap)
//     return [...anagramMap.values()]
// }

// let test18 = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// console.log(groupAnagrams1(test18))


// two sum practice 

function getNthFibIterative(n: number): number[] {

    let count: number = 0;
    let temp: number;
    let num1: number = 0;
    let num2: number = 1;
    let res: number[] = [];

    while(count < n){

        if(count === 0) res.push(0)
        if(count === 1) res.push(1)

        temp = num1 + num2
        num1 = num2
        num2 = temp

        res.push(num2)

        ++count
    }

    return res
}

// function getNthFibRecursive(n: number): number[] {
    
//     let num1: number = 0;
//     let num2: number = 1;
//     let res: number[] = []
//     let _recursion = (n1: number, n2: number) => {
//         let n: number = n1 + n2;
//         _recursion(n)
//     }   
//     return 

// }

utils.timed('res', getNthFibIterative, [6]);