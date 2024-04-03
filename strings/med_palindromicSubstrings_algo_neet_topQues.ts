import { json } from "stream/consumers"

/**
 * medium - strings - palindromic substrings
 * @description
 * given a string, return the number of palindromic
 * substrings in it.  
 * palindrome - reads the same backward & forward.
 * substring - a contiguous sequence of chars within a string.
 * @summary
 * @param {string} s - string 
 * @returns {number} - # of palindromic substrings
 */
function countSubstrings(str: string): number {
    //loop thru chars and expand from center then check if palindromic & record
    let count: number = 0;

    let expandFromCenter = (char: string, left: number, right: number): void => {

        while(left >= 0 && right < char.length && char[left] === char[right]){
            ++count;
            --left;
            ++right;
        }
    }

    for(let i = 0; i < str.length; i++){     

        //odd palindromic substrings
        expandFromCenter(str, i, i); // a, a, a, aaa (test1)
        //even palindromic substrings
        expandFromCenter(str, i, i + 1) // aa, aa (test1)
    }

    return count
};


let palindromicSubstringsTest1: string = 'aaa';
let palindromicSubstringsTest2: string = 'abc';

console.log(countSubstrings(palindromicSubstringsTest2))