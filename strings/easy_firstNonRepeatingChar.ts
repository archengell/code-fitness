

/** First Non-repeating Character | string | easy */
/*********************************************************** */
function firstNonRepeatingCharacter(string: string) {
    type obj = {[key: string]: number}
    let strArr: string[] = [...string]
    let chars: obj = {};
    let nonRepeat: string;
    let res: number;

    /** Option 1 of same logic */
    for(let char of string){
        chars[char] = chars[char] ? chars[char] + 1: 1
    }

    /** Option 2 from algoExpert */
    // for(let char of string){
    //     if(!(char in chars)) chars[char] = 0
    //     chars[char]++
    // }

    console.log(chars)

    for(let key in chars){
        if( chars[key] == 1){
            nonRepeat=key
            break
        }else{
            res = -1
        }
    }

    res = strArr.findIndex((item)=> item == nonRepeat)
    // console.log(nonRepeat)
    // console.log(res)
    return res;
}
let case1:string = 'abcdcaf'



firstNonRepeatingCharacter(case1)
