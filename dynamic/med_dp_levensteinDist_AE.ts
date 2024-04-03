
import * as utils from '../utils'

/**
 * @description
 * @summary
 * @param str1 
 * @param str2 
 * @returns 
 */
// o(r*c) time & space
 function levenshteinDistance(str1: string, str2: string): number {
    let edits: number[][] = [];

    let largeStr = str1 > str2 ? str1 : str2;
    let smallStr = str2 < str1 ? str2 : str1;

    let largeStrLen = largeStr.length
    let smallStrLen = smallStr.length

    // create edit 2D matrix: r x c
    for(let r = 0; r < smallStr.length + 1; r++){
        let row: number[] = [];
        for(let c = 0; c < largeStr.length + 1; c++){
            row.push(c)
        }
        row[0] = r;
        edits.push(row)
    }
    for(let r = 1; r < smallStrLen + 1; r++){
        for(let c = 1; c < largeStrLen + 1; c++){
            if(smallStr[r-1] === largeStr[c-1]){
                //get diagonal 
                edits[r][c] = edits[r-1][c-1]
            }
            else{
                // get min( above, diagonal, left )
                edits[r][c] = 1 + Math.min(edits[r-1][c], edits[r-1][c-1], edits[r][c-1])
            }
        }
    }
    return edits[smallStrLen][largeStrLen]
}


function levenshteinDistance1(str1: string, str2: string): number {
    
    let largeStr = str1 > str2 ? str1 : str2;
    let smallStr = str2 < str1 ? str2 : str1;
    
    let largeStrLen = largeStr.length;
    let smallStrLen = largeStr.length;

    let edits: number[][] = Array.from(Array(2), () => new Array(largeStrLen).fill(0))

    for(let r = 1; r <= smallStrLen; r++){
        for(let c = 0; c <= largeStrLen; c++){
            if(c === 0){
                edits[1][0] = edits[0][0] + 1
            } 
            else if(smallStr[r-1] === largeStr[c-1]){
                edits[1][c] = edits[0][c-1]
            }
            else{
                // look up above, diagonal, and left...
                edits[1][c] = 1 + Math.min(edits[0][c], edits[0][c-1], edits[1][c-1])
            }
        }
        
        edits[0] = Object.assign([], edits[1])
        console.log(edits[0])
    }
    console.log(edits[1][largeStrLen])
    console.log(edits)
    return edits[1][largeStrLen]
}




// trying to do it in o(r*c) time & o(min(r,c)) space
function levenshteinDistance_NA(str1: string, str2: string) {

    let map1 = new Map<string, number>()
    let map2 = new Map<string, number>()


    for(let char of str1){
        map1.set(char, ( map1.get(char) + 1 ) || 1)
    }
    for(let char of str2){
        map2.set(char, ( map2.get(char) + 1 ) || 1)
    }

    let operations: number = Math.abs(map1.size - map2.size);

    let largerSubStr: string = str1.length >= str2.length ? str1 : str2;

    for(let char of largerSubStr){
        if(map1.has(char) && map1.has(char)) operations += Math.abs(map1.get(char) - map2.get(char))
        if(!map1.has(char) || !map2.has(char)) {
            operations += 0.5
        }
    }

    console.log(operations)
    return operations;
}


let levenshteinDist1: any = {
    "str1": "abc",
    "str2": "yabd"
}
let levenshteinDist2: any = {
    "str1": "abc",
    "str2": "yabd"
}
let levenshteinDist3: any = {
    "str1": "abc",
    "str2": "yabd"
}



let { str1, str2 } = levenshteinDist1

utils.timed(levenshteinDistance, [str1, str2])