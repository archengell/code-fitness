import { isBooleanObject } from "util/types";



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
