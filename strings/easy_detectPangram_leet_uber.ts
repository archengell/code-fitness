/**
 * LEET_UBER: DETECT PANGRAM - EASY
 * 
 * A pangram is a sentence that contains every single letter of the alphabet at least once. 
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 * because it uses the letters A-Z at least once (case is irrelevant).
 * 
 * Given a string, detect whether or not it is a pangram. 
 * Return True if it is, False if not. Ignore numbers and punctuation.
 */

const isPangram = (phrase: string): boolean => {
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
return [...alphabet].every( letter => phrase.toLowerCase().includes(letter));
}


// isAngram : regular arrow function
const isAngramReg = (origin: string, test: string): boolean => {
    console.log([...test].every( letter => origin.includes(letter)))
    return [...test.toLowerCase()].every( letter => origin.toLowerCase().includes(letter))
}

// isAngram : currying version
const isAngramCurry = (origin: string) => (test: string): boolean => {
    console.log([...test].every( letter => origin.includes(letter)))
    return [...test.toLowerCase()].every( letter => origin.toLowerCase().includes(letter))
}

let angramTestForCinema = isAngramCurry('cinema');
angramTestForCinema('iceman')



// const isPangram = (phrase: string): boolean => {
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let alphabetArr = [...alphabet]
// let phraseLC = phrase.toLowerCase()

// for(let letter of phraseLC){
//     if(alphabetArr.length && phraseLC.includes(letter)){
//     let idx = alphabetArr.indexOf(letter)
//     if(idx > -1) {
//         alphabetArr.splice(idx, 1)
//         }
//     }
// }
// return (!alphabetArr.length)
// }

// const isPangram = (phrase: string): boolean => 
// new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;