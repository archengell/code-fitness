
/**
 * medium - string - algoExpert - Min. Char. For Words
 * @description
 * Write a function that takes in an array of words and returns the 
 * smallest array of characters needed to form all of the words. 
 * The characters dont need to be in any particular order
 * 
 * For example. the characters ['y', 'r', 'o', 'u'] are needed to 
 * form the words ['your', 'you', 'or', 'yo']
 * 
 * Note: input words will not contain spaces, but may have special
 * characters: !, ?, *, etc
 * @summary
 * time: o(n * l) => 
 * space: o(c) => 
 * @param words 
 * @returns 
 */
function minimumCharactersForWords(words: string[]): string[] {

    let maxCharCount = new Map<string, number>();
    let charCounts: Map<string,number>[] = [];
    let res: string[] = [];

    //get character frequency for each word
    //need to apply ! to prevent possibly undefined TS errors...
    //this could be a function...
    for(let word of words){
        let charCount = new Map<string, number>()
        for(let char of word.split('')){
            charCount.set(char, charCount.get(char)! + 1 || 1)
        }
        charCounts.push(charCount)
    }

    //update and record max frequency of charaters in word list
    //this could be a function...
    for(let charCount of charCounts){
        // console.log(charCount)
        for(let key of charCount.keys()){
           if(maxCharCount.has(key)){
                maxCharCount.set(key, Math.max(charCount.get(key)!, maxCharCount.get(key)!))
           }else{
               maxCharCount.set(key, charCount.get(key)!)
           }
        }
    }

    //convert this maxCharCount map to a list
    //this could be a function...
    for(let [key, value] of maxCharCount.entries()){
        res = [...res, ...new Array(value).fill(key)]
    }

    return res
}

let minCharForWords1: string[] = ["this", "that", "did", "deed", "them!", "a"];
let minCharForWords2: string[] = ["a", "abc", "ab", "boo"];
let minCharForWords3: string[] = ["a"];
let minCharForWords5: string[] = ["!!!2", "234", "222", "432"];
let minCharForWords6: string[] = ["this", "that", "they", "them", "their", "there", "time", "is"];

minimumCharactersForWords(minCharForWords1)